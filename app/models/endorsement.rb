class Endorsement < ApplicationRecord

  belongs_to :endorser,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :skill,
  primary_key: :id,
  foreign_key: :skill_id,
  class_name: :Skill
  
end
