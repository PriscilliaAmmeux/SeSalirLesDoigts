const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "activities" });
  }

  insert(activities) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [activities.title]
    );
  }

  update(activities) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [activities.title, activities.id]
    );
  }

  displayActivitiesSpring() {
    return this.connection.query(
      `SELECT ${this.table}.id as id_activities, ${this.table}.title, ${this.table}.description, ${this.table}.id_subjects, ${this.table}.id_seasons, ${this.table}.photo, seasons.seasons, subjects.subjects  FROM ${this.table}
      INNER join seasons ON ${this.table}.id_seasons = seasons.id
      INNER join subjects ON ${this.table}.id_subjects = subjects.id where ${this.table}.id_seasons = 1`
    );
  }

  displayActivitiesSummer() {
    return this.connection.query(
      `SELECT ${this.table}.id as id_activities, ${this.table}.title, ${this.table}.description, ${this.table}.id_subjects, ${this.table}.id_seasons, ${this.table}.photo, seasons.seasons, subjects.subjects  FROM ${this.table}
      INNER join seasons ON ${this.table}.id_seasons = seasons.id
      INNER join subjects ON ${this.table}.id_subjects = subjects.id where ${this.table}.id_seasons = 2`
    );
  }

  displayActivitiesFall() {
    return this.connection.query(
      `SELECT ${this.table}.id as id_activities, ${this.table}.title, ${this.table}.description, ${this.table}.id_subjects, ${this.table}.id_seasons, ${this.table}.photo, seasons.seasons, subjects.subjects  FROM ${this.table}
      INNER join seasons ON ${this.table}.id_seasons = seasons.id
      INNER join subjects ON ${this.table}.id_subjects = subjects.id where ${this.table}.id_seasons = 3`
    );
  }

  displayActivitiesWinter() {
    return this.connection.query(
      `SELECT ${this.table}.id as id_activities, ${this.table}.title, ${this.table}.description, ${this.table}.id_subjects, ${this.table}.id_seasons, ${this.table}.photo, seasons.seasons, subjects.subjects  FROM ${this.table}
      INNER join seasons ON ${this.table}.id_seasons = seasons.id
      INNER join subjects ON ${this.table}.id_subjects = subjects.id where ${this.table}.id_seasons = 4`
    );
  }

  displayActivitiesOthers() {
    return this.connection.query(
      `SELECT ${this.table}.id as id_activities, ${this.table}.title, ${this.table}.description, ${this.table}.id_subjects, ${this.table}.id_seasons, ${this.table}.photo, seasons.seasons, subjects.subjects  FROM ${this.table}
      INNER join seasons ON ${this.table}.id_seasons = seasons.id
      INNER join subjects ON ${this.table}.id_subjects = subjects.id where ${this.table}.id_seasons = 5`
    );
  }
}

module.exports = ItemManager;
