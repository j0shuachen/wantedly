#users
id                  int     
username            string  not null
email               string  not null
f_name              string  not null
l_name              string  not null
password_digest     string  not null
session_token       string

#skills
id                  int
user_id             int     not null       //user_id == skill belongs to this user

#endorsements
id                  int
user_id             int     not null      //user_id == person endorsing
skill_id            int     not null      //skill_id == skill being endorsed

//creating endorsements table will allow us to keep track of who is endorsing the skill and prevent multiple endorsements from same user