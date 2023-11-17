import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class DBService {
  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection;
  isService: boolean = false;
  platform: string = '';
  sqlitePlugin: any;
  native: boolean = false;

  constructor() {}

  async initDatabase(): Promise<void> {
    this.db = await this.sqlite.createConnection(
      'kanadb',
      false,
      'no-encryption',
      1,
      true
    );
    await this.db.open();
  }

  async initializePlugin(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.platform = Capacitor.getPlatform();
      if (this.platform === 'ios' || this.platform === 'android') this.native = true;
      this.sqlitePlugin = CapacitorSQLite;
      this.sqlite = new SQLiteConnection(this.sqlitePlugin);
      this.isService = true;
      resolve(true);
    });
  }

  async initWebStore(): Promise<void> {
    if (this.platform !== 'web') {
      throw new Error(`not implemented for this platform: ${this.platform}`);
    }

    if (this.sqlite != null) {
      try {
        await this.sqlite.initWebStore();
      } catch (err) {
        if (typeof err === 'string') {
          throw new Error(err);
        } else {
          throw new Error('An unknown error occurred.');
        }
      }
    } else {
      throw new Error(`no connection open`);
    }
  }

  async seedDB(): Promise<void> {
    const schema = `
      CREATE TABLE IF NOT EXISTS hiragana_beginner1 (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        japanese TEXT NOT NULL,
        english TEXT NOT NULL
      );
    `;
    await this.db.execute(schema);
  }
}
