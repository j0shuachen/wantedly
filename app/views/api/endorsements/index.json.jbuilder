@endorsements.each do |endorsement|
  json.set! endorsement.id do
    json.extract! endorsement, :id, :skill_id, :skill, :user_id, :endorser
  end
end
