# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# DB設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|unique: true|
|email|string|null: false|
|password|password|null: false|

### Association
- has_many :messages

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|content|text|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user