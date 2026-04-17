import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";

let db: Database.Database | null = null;

function getDbPath(): string {
  const configured = process.env.DATABASE_PATH;
  const resolved = configured
    ? path.resolve(process.cwd(), configured)
    : path.resolve(process.cwd(), "data", "kalinga.db");
  const dir = path.dirname(resolved);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  return resolved;
}

export function getDb(): Database.Database {
  if (db) return db;
  db = new Database(getDbPath());
  db.pragma("journal_mode = WAL");
  db.exec(`
    CREATE TABLE IF NOT EXISTS inquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      type TEXT NOT NULL,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      company TEXT,
      city TEXT,
      subject TEXT,
      message TEXT NOT NULL,
      meta TEXT
    );

    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      address_line1 TEXT NOT NULL,
      address_line2 TEXT,
      city TEXT NOT NULL,
      state TEXT NOT NULL,
      pincode TEXT NOT NULL,
      country TEXT NOT NULL DEFAULT 'India',
      items TEXT NOT NULL,
      notes TEXT,
      payment_method TEXT NOT NULL DEFAULT 'email',
      status TEXT NOT NULL DEFAULT 'pending'
    );
  `);
  return db;
}

export type InquiryRow = {
  id: number;
  created_at: string;
  type: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  city: string | null;
  subject: string | null;
  message: string;
  meta: string | null;
};

export type OrderRow = {
  id: number;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  address_line1: string;
  address_line2: string | null;
  city: string;
  state: string;
  pincode: string;
  country: string;
  items: string;
  notes: string | null;
  payment_method: string;
  status: string;
};
