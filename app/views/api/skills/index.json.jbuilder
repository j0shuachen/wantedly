@skills.each do |skill|
  json.set! skill.id do
    json.extract! skill, :id, :user, :user_id, :skill, :endorsements
  end
end
