@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :f_name, :l_name, :email, :image_url
  end
end
