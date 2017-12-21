# WANTEDLY PROJECT
=====================================

## LIVE LINK: https://wantedlee.herokuapp.com/#/

## MAIN PROJECT MVP

### Build a web app where a user can list his/her skills in a profile page and recommend/endorse skills to other users.

-------------------------

### INITIAL MOCKUP

==================

![alt text](https://raw.githubusercontent.com/j0shuachen/wantedly/master/docs/wantedlywireframe.png?token=Aa-KQ-IYxTliLh95_yrANKR--6-xPf9hks5aRPetwA%3D%3D "mockup")

-------------------------

### FRAMES

==========

#### SPLASH

![alt text](https://raw.githubusercontent.com/j0shuachen/wantedly/master/docs/splash_page.png?token=Aa-KQ53GSB7NWTboTqtVhIXSpnRqsf4xks5aRQjzwA%3D%3D "splash")

#### SIGNUP

![alt text](https://raw.githubusercontent.com/j0shuachen/wantedly/master/docs/login_page.png?token=Aa-KQ97M8uGEEat9O8PSLnJLlfqs_2aHks5aRQlCwA%3D%3D "signup")

#### LOGIN

![alt text](https://raw.githubusercontent.com/j0shuachen/wantedly/master/docs/signup_page.png?token=Aa-KQ2RdEuhugAnStekUDZ9C7Sgc_2tDks5aRQldwA%3D%3D "signup")

#### INDEX

![alt text](https://raw.githubusercontent.com/j0shuachen/wantedly/master/docs/index_page.png?token=Aa-KQ34FHldC_TPp3FFbjGWwbal30nnmks5aRQ2OwA%3D%3D "index")

#### PROFILE

![alt text](https://raw.githubusercontent.com/j0shuachen/wantedly/master/docs/profile_page.png?token=Aa-KQ9cRSh2Kb-uFWw2IDjMPbZNibt0dks5aRQmfwA%3D%3D "profile")

-------------------------


### TECHNOLOGY STACK
========================
#### database- postgresql
#### backend- ruby/rails
#### frontend- react/redux

--------------------------

### FEATURES ACCOMPLISHED

==============================

#### 1. splash page- landing page for site

#### 2. user auth- users can signup / login / demo the site via signup page / login page / demo button

#### 3. index page- users can view all users in the database

### - MAIN FEATURE - user profile page

#### 4. users can access a user's profile to view their basic information

#### 5. users can add new skills to the user's profile

###### for demo convenience purposes, please note:
###### ----- 1. users do not need to be signed in to add skills to a profile
###### ----- 2. any user can add a new skill to any profile

#### 6. users can endorse skills on a user's profile

###### please note:
###### ----- 1. users must be signed in to endorse skills since the profile pictures of the first 10 endorsers are rendered for every skill
###### ----- 2. users can endorse the same skill for the same profile multiple times, allowing users to see the ordering of skills update based on number of endorsements

-----------------------------------

### - FUTURE FEATURES -
========================

####  add a search bar in index page to search by user or by skill

-----------------------------------

###  AFTER INTERVIEW PROCESS TWEAKS FOR PORTFOLIO
============================================================

#### 1. add scoped uniqueness to prevent a user from endorsing the same skill for the same user

#### 2. add verification to prevent unauthorized skill creation on profiles that do not belong to the current user

#### 3. break down components further
