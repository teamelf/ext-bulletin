CREATE TABLE bulletin (
  id VARCHAR(50) NOT NULL,
  title VARCHAR(100) NOT NULL,
  content LONGTEXT NOT NULL,
  step INT DEFAULT 0 NOT NULL,
  created_at DATETIME DEFAULT NULL,
  updated_at DATETIME DEFAULT NULL,
  deleted_at DATETIME DEFAULT NULL,
  PRIMARY KEY(id)
) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB;
