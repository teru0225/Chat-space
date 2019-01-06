## group_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|varchar|null: false|
|group_id|integer||
|password|string|null: false|

### Association
- has_many :messages
- has_many :group_users
- has_many :groups, through: :group_users


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :group_users
- has_many :messages
- has_many :users, through: :group_users
- accepts_nested_attributes_for :group_users
<!-- accepts_nested_attributes_forは、他のモデルを一括で更新・保存できるようにしてくれる -->

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


### Association
- belongs_to :group
- belongs_to :user

