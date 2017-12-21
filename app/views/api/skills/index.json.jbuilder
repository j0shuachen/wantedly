# @skills.each do |skill|
#   json.set! skill.id do
#     json.extract! skill, :id, :user_id, :skill
#     json.len skill.endorsements.length
#     json.endorsements do
#       json.array! skill.endorsements.each do |endorsement|
#         # json.set! endorsement.id do
#           json.extract! endorsement.endorser, :f_name, :l_name, :image_url, :id
#         # end
#       end
#     end
#   end
# end

#
@skills.each do |skill|
  json.set! skill.id do
    json.extract! skill, :id, :user_id, :skill, :endorsers
    json.len skill.endorsers.length
  end
end
