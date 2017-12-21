class Skill < ApplicationRecord

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  has_many :endorsers,
  primary_key: :id,
  foreign_key: :skill_id,
  class_name: :Endorsement




end
