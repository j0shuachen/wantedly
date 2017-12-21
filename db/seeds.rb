# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ f_name: 'Star Wars' }, { f_name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

SKILLS = ['javascript', 'ruby', 'rails', 'react', 'express',
  'node', 'css', 'html', 'node', 'vue', 'd3', 'lamp',
  'phoenix', 'java', 'python', 'django', 'flux', 'redux',
  'react native', 'c++']

User.destroy_all
Endorsement.destroy_all
Skill.destroy_all


user1 = User.create!(username: Faker::Internet.unique.user_name, password: "guest11", f_name: "Thomas", l_name: "Smith", location: Faker::Address.city, email: Faker::Internet.free_email('tsmithomas'), image_url: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1513672502/pexels-photo-401685.jpg', occupation: Faker::Job.title, gender: 'm', age: 21 )
user2 = User.create!(username: Faker::Internet.unique.user_name, password: "guest11", f_name: "Andy", l_name: "Booker", location: Faker::Address.city, email: Faker::Internet.free_email('bookme'), image_url: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1513672515/pexels-photo-614810.jpg', occupation: Faker::Job.title, gender: 'm', age: 21)
user3 = User.create!(username: Faker::Internet.unique.user_name, password: "guest11", f_name: "Bob", l_name: "Morgan", location: Faker::Address.city, email: Faker::Internet.free_email('bobbay'), image_url: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1513672508/smile-man-worker-vertical-160914.jpg', occupation: Faker::Job.title, gender: 'm', age: 22 )
user4 = User.create!(username: Faker::Internet.unique.user_name, password: "guest11", f_name: "Stephan", l_name: "Kosossa", location: Faker::Address.city, email: Faker::Internet.free_email('stepstep'), image_url: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1513672508/pexels-photo-567459.jpg', occupation: Faker::Job.title, gender: 'm', age: 22 )
user5 = User.create!(username: Faker::Internet.unique.user_name, password: "guest11", f_name: "Nigel", l_name: "Crispan", location: Faker::Address.city, email: Faker::Internet.free_email('crispan'), image_url: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1513672507/pexels-photo-544716.jpg', occupation: Faker::Job.title, gender: 'm', age: 23 )
user6 = User.create!(username: Faker::Internet.unique.user_name, password: "guest11", f_name: "Louis", l_name: "Matthews", location: Faker::Address.city, email: Faker::Internet.free_email('lmvlouism'), image_url: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1513672508/pexels-photo-450271.jpg', occupation: Faker::Job.title, gender: 'm', age: 23 )
user7 = User.create!(username: Faker::Internet.unique.user_name, password: "guest11", f_name: "Estevan", l_name: "Ramos", location: Faker::Address.city, email: Faker::Internet.free_email('estevanr01'), image_url: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1513672507/pexels-photo-428339.jpg', occupation: Faker::Job.title, gender: 'm', age: 24 )
user8 = User.create!(username: Faker::Internet.unique.user_name, password: "guest11", f_name: "Eric", l_name: "Liu", location: Faker::Address.city, email: Faker::Internet.free_email('eliu007'), image_url: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1513672506/pexels-photo-450214.jpg', occupation: Faker::Job.title, gender: 'm', age: 24 )
user9 = User.create!(username: Faker::Internet.unique.user_name, password: "guest11", f_name: "Gary", l_name: "Ramirez", location: Faker::Address.city, email: Faker::Internet.free_email('gramirezg201'), image_url: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1513672504/pexels-photo-428341.jpg', occupation: Faker::Job.title, gender: 'm', age: 25 )
user10 = User.create!(username: Faker::Internet.unique.user_name, password: "guest11", f_name: "Henry", l_name: "Hibbert", location: Faker::Address.city, email: Faker::Internet.free_email('hhibbert'), image_url: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1513672504/pexels-photo-415326.jpg', occupation: Faker::Job.title, gender: 'm', age: 25 )
user11 = User.create!(username: Faker::Internet.unique.user_name, password: "guest11", f_name: "Aaron", l_name: "Hotch", location: Faker::Address.city, email: Faker::Internet.free_email('ahotcher36'), image_url: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1513672502/pexels-photo-375880.jpg', occupation: Faker::Job.title, gender: 'm', age: 26 )
user12 = User.create!(username: Faker::Internet.unique.user_name, password: "guest11", f_name: "Lulu", l_name: "Li", location: Faker::Address.city, email: Faker::Internet.free_email('lululemonz'), image_url: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1513672508/pexels-photo-582039.jpg', occupation: Faker::Job.title, gender: 'f', age: 21 )
user13 = User.create!(username: Faker::Internet.unique.user_name, password: "guest11", f_name: "Kleo", l_name: "Korniko", location: Faker::Address.city, email: Faker::Internet.free_email('koko'), image_url: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1513672506/pexels-photo-458766.jpg', occupation: Faker::Job.title, gender: 'f', age: 21 )
user14 = User.create!(username: Faker::Internet.unique.user_name, password: "guest11", f_name: "Sarah", l_name: "Smith", location: Faker::Address.city, email: Faker::Internet.free_email('sarahsmith44'), image_url: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1513672505/pexels-photo-445109.jpg', occupation: Faker::Job.title, gender: 'f', age: 22 )
user15 = User.create!(username: Faker::Internet.unique.user_name, password: "guest11", f_name: "Kylie", l_name: "Payne", location: Faker::Address.city, email: Faker::Internet.free_email('kpain650'), image_url: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1513672504/pexels-photo-418870.jpg', occupation: Faker::Job.title, gender: 'f', age: 22 )
user16 = User.create!(username: Faker::Internet.unique.user_name, password: "guest11", f_name: "Kara", l_name: "Town", location: Faker::Address.city, email: Faker::Internet.free_email('town.kara'), image_url: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1513672504/pexels-photo-415265.jpg', occupation: Faker::Job.title, gender: 'f', age: 23 )
user17 = User.create!(username: Faker::Internet.unique.user_name, password: "guest11", f_name: "Maria", l_name: "Yee", location: Faker::Address.city, email: Faker::Internet.free_email('ymariayee'), image_url: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1513672502/pexels-photo-415829.jpg', occupation: Faker::Job.title, gender: 'f', age: 23 )
user18 = User.create!(username: Faker::Internet.unique.user_name, password: "guest11", f_name: "Kiana", l_name: "Klisha", location: Faker::Address.city, email: Faker::Internet.free_email('kikimi3'), image_url: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1513672504/pexels-photo-392748.jpg', occupation: Faker::Job.title, gender: 'f', age: 24 )
user19 = User.create!(username: Faker::Internet.unique.user_name, password: "guest11", f_name: "Judy", l_name: "Jones", location: Faker::Address.city, email: Faker::Internet.free_email('jjones1000'), image_url: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1513672496/pexels-photo-372042.jpg', occupation: Faker::Job.title, gender: 'f', age: 24 )

user20 = User.create!(username: "guest1", password: "guest11", f_name: "Priscilla", l_name: "Mack", location: Faker::Address.city, email: Faker::Internet.free_email('mss.prscila4'), image_url: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1513672488/pexels-photo-164262.jpg', occupation: Faker::Job.title, gender: 'f', age: 32 )
user21 = User.create!(username: "guest2", password: "guest11", f_name: "Laurie", l_name: "Ling", location: Faker::Address.city, email: Faker::Internet.free_email('lling1'), image_url: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1513672488/pexels-photo-157023.jpg', occupation: Faker::Job.title, gender: 'f', age: 32 )
user22 = User.create!(username: Faker::Internet.unique.user_name, password: "guest11", f_name: "Will", l_name:" Winger", location: Faker::Address.city, email: Faker::Internet.free_email('the.williewinger'), image_url: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1513672487/pexels-photo-91227.jpg', occupation: Faker::Job.title, gender: 'm', age: 32 )
user23 = User.create!(username: Faker::Internet.unique.user_name, password: "guest11", f_name: "Omar", l_name:" Kalif", location: Faker::Address.city, email: Faker::Internet.free_email('okeefin33'), image_url: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1513672487/person-young-man-beard-emotions-157966.jpg', occupation: Faker::Job.title, gender: 'm', age: 33 )


USERS = {"user1" => user1, "user2" =>user2, "user3" =>user3, "user4" =>user4, "user5" =>user5, "user6" =>user6,
  "user7" =>user7, "user8" =>user8, "user9" =>user9, "user10" =>user10, "user11" =>user11, "user12" =>user12, "user13" =>user13,
  "user14" =>user14, "user15" =>user15, "user16" =>user16, "user17" =>user17, "user18" =>user18, "user19" =>user19,
  "user20" =>user20, "user21" =>user21, "user22" =>user22, "user23"  =>user23}



def skill_creation
  (1..19).to_a.each do |x|
    random = rand(20)
    random_counter = 0
    while random_counter < random
      Skill.create!(user_id: USERS[('user' + x.to_s)].id, skill: SKILLS[random_counter])
      random_counter +=1
    end
  end
end

skill_length = Skill.all.length - 1

def endorsement_creation
  Skill.all.each do |skill|
    random = rand(20)
    counter = 1
    while counter < random
      Endorsement.create!(skill_id: skill.id, user_id: USERS['user' + counter.to_s].id, image_url: USERS['user' + counter.to_s].image_url)
      counter += 1
    end

  end

end

skill_creation()
endorsement_creation()


# skill1 = Skill.create!(skill: SKILLS[rand(20)], user_id: user1.id)
# skill2 = Skill.create!(skill: SKILLS[rand(20)], user_id: user1.id)
# skill3 = Skill.create!(skill: SKILLS[rand(20)], user_id: user1.id)
# skill4 = Skill.create!(skill: SKILLS[rand(20)], user_id: user1.id)
# skill5 = Skill.create!(skill: SKILLS[rand(20)], user_id: user2.id)
# skill6 = Skill.create!(skill: SKILLS[rand(20)], user_id: user2.id)
# skill7 = Skill.create!(skill: SKILLS[rand(20)], user_id: user3.id)
# skill8 = Skill.create!(skill: SKILLS[rand(20)], user_id: user3.id)
# skill9 = Skill.create!(skill: SKILLS[rand(20)], user_id: user4.id)
# skill10 = Skill.create!(skill: SKILLS[rand(20)], user_id: user4.id)
# skill11 = Skill.create!(skill: SKILLS[rand(20)], user_id: user5.id)
# skill12 = Skill.create!(skill: SKILLS[rand(20)], user_id: user6.id)
# skill13 = Skill.create!(skill: SKILLS[rand(20)], user_id: user7.id)
# skill14 = Skill.create!(skill: SKILLS[rand(20)], user_id: user7.id)
# skill15 = Skill.create!(skill: SKILLS[rand(20)], user_id: user8.id)
# skill16 = Skill.create!(skill: SKILLS[rand(20)], user_id: user9.id)
# skill17 = Skill.create!(skill: SKILLS[rand(20)], user_id: user10.id)
# skill18 = Skill.create!(skill: SKILLS[rand(20)], user_id: user11.id)
# skill19 = Skill.create!(skill: SKILLS[rand(20)], user_id: user12.id)
# skill20 = Skill.create!(skill: SKILLS[rand(20)], user_id: user13.id)
# skill21 = Skill.create!(skill: SKILLS[rand(20)], user_id: user14.id)
# skill22 = Skill.create!(skill: SKILLS[rand(20)], user_id: user15.id)
# skill23 = Skill.create!(skill: SKILLS[rand(20)], user_id: user16.id)
# skill24 = Skill.create!(skill: SKILLS[rand(20)], user_id: user17.id)
# skill25 = Skill.create!(skill: SKILLS[rand(20)], user_id: user18.id)
# skill26 = Skill.create!(skill: SKILLS[rand(20)], user_id: user19.id)
# skill27 = Skill.create!(skill: SKILLS[rand(20)], user_id: guest1.id)
# skill28 = Skill.create!(skill: SKILLS[rand(20)], user_id: guest2.id)
# skill29 = Skill.create!(skill: SKILLS[rand(20)], user_id: guest3.id)
# skill30 = Skill.create!(skill: SKILLS[rand(20)], user_id: guest4.id)
# skill31 = Skill.create!(skill: SKILLS[rand(20)], user_id: user1.id)
# skill32 = Skill.create!(skill: SKILLS[rand(20)], user_id: user1.id)
