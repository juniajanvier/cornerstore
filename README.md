# Corner Store

## About Us 

CornerStore seeks to connect consumers through a network of Black Owned small businesses and vendors by creating an interactive website with specialized filters that allow for equitable results and the ability to see business information such as location, history, etc. Our solution would also allow for in-depth reviews.

Our goal is better to understand how we can best improve the user experience of finding Black-Owned Businesses in their area, that both fulfills them being socially conscious and supportive of a cause while having access to quality products and services.

## Meet the Team  

Junia Janvier: Team Lead
<br/> Joanna Jung: UI/UX Designer
<br/> Sophie Fang: Technical Member
<br/> Ha (Amelia) Nguyen: Technical Member
<br/> Abdul Ka: Technical Member

## How to Run Application

Backend: cd api; venv/bin/flask run --no-debugger

Frontend: yarn start

## All Sprints:

https://docs.google.com/document/d/1JtmBw63qlJ00GQZ1diCL6cJwsponV_IuG9opmMc0dDk/edit?usp=sharing

## Jira Backlog

### Ordering of Backlog

- We are ordering the backlog based on what information we have and which are accomplishable without the assistance of another component to test the functionality (ie. having the database set up before developing a filter).
  <br/>https://buspark.atlassian.net/jira/software/projects/CP/boards/16

## Sprint Planning 

The forecast for our second sprint is to complete 1 user story with the first including plotting the intitial businesses and vendors. Due to the search and filtering to be closely tied, we decided to hold off on this to ensure that we can focus on developing our database as a team collective in the following sprint.

## Daily Scrums

### Daily Scrum #1

**During this scrum, we didn't come across many impediments, just that we decided to focus our work on a more succint task of listing businesses, rather than including the backend database as well, we now are focusing on how to set up our database for Sprint 4, and we'll be meeting with Nathan to help us set up. We completed adding our 26 (now 35) businesses, linking them to a main page (server-side, and boxing the links to distinguish the businesses from each other). We also included a title, as a means to showcase incremental steps, as our focus for this past week was to set up our database, and environment.**

## Mob Programming/ Test-Driven Development
- Mob Programming: http://cs-people.bu.edu/jjanvier/Jira/2021-03-06.png 
- Test driven: http://cs-people.bu.edu/jjanvier/Jira/2021-03-08%20(4).png 

- Backlog
  - There is a list of 25 businesses
    - As a consumer, my immediate goal is to find BoBs and Vendors, thus I want to first see the main page with 25 amount of businesses listed on the main page so that I can see an organized directory of businesses and I don’t have to go through multiple websites.

  - There is a list of 25 businesses part 2
    - As a consumer, my immediate goal is to find BoBs and Vendors, thus I want to first see the main page with 25 amount of businesses listed on the main page so that I can see an organized directory of businesses and I don’t have to go through multiple websites. However, this will be implemented on the server end.

  - These businesses can be searched by business name
    - As a consumer, my immediate goal is to find BoBs and Vendors, thus I want to first see the main page with a search bar to find my desired business by their name so that I can begin to sort through the businesses on the site.

  - These businesses are organized by category and can be searched by business name
    - As a consumer, my immediate goal is to find BoBs and Vendors specifically as it pertains to the type of business I want category of industry, thus I want to first see the main page with 25 amount of businesses sorted by the specific industry and an ability to search them by category on the main page so that I can see an organized directory of businesses and I don’t have to go through the entire list to find the desired business.

  - Include services in at least 25 businesses
    - As a consumer, my immediate goal is to find BoBs and Vendors specifically as it pertains to the type of business I want category of industry, thus I want to first see the main page with 50 amount of businesses sorted by the specific industry and an ability to search them by category on the main page so that I can see an organized directory of businesses and I don’t have to go through the entire list to find the desired business.

  - Filtering search results
    - As a consumer, my immediate goal is to find BoBs and Vendors specifically as it pertains to the type of business I want a category of industry, thus I want to first see the main search and an ability to search them by category on the main page followed by an ability to hone down my search based on particular type so that I can see an organized directory of businesses and I don’t have to go through the entire list to find the desired business.

  - Include a map of businesses that have a location
    - As a consumer, my goal is to also find out how to get to my chosen business thus I want to add a map with locations so that I can see a plotted map of businesses and I don’t have to go through the entire list to see how far they are and their location.

  -Can search for directions to business (i.e. similar to Google with transit options)
    - s a consumer, my immediate goal is to find BoBs and Vendors specifically as it pertains to the location of the business, thus I want to further this goal by implementing directions so that I can navigate my way to a selected BoBs and if this business has no address their general area of service.

    - Can filter results by location
    - As a consumer, my immediate goal is to find BoBs and Vendors specifically as it pertains to the type of business I want a category of industry, thus I want to first see the main search and an ability to search them by category on the main page followed by an ability to hone down my search based on particular type so that I can see an organized directory of businesses and I don’t have to go through the entire list to find the desired business.

    - Selecting a business profile page for more info
    - As a consumer, I’d like to find business information at once, after making my selection in the search engine, thus I wanted to create profile pages so that businesses have their own space for their insights, history, contact, and inventory, and so I don’t have to see the minuscule info on the search page. 

  - On the profile page, add all relevant information
    - As a consumer, I’d like to find business information at once, after making my selection in the search engine, thus I wanted to create profile pages so that businesses have their own space for their insights, history, contact, and inventory, and so I don’t have to see the minuscule info on the search page.

  - Can see and add reviews for businesses
    - As a consumer, I’d like to find business information at once, after making my selection in the search engine, thus I wanted to add reviews and the ability to add them so that I can access my decision to purchase. 


<br/>**Activities for Upcoming Week**

- Backlog (Ordered based on the user flow of consumers when navigating the app based on the feedback of interviews and validation)
  - Amelia to create category buttons for main page
  - Joanna to create design icons for categories and send to Amelia
  -Abdul to connect backend to frontend (i.e. pull DB to server)
  -Sophie to create a server side search bar
  -Sophie to implement search engine to pull from DB
  -Junia to import Google Maps API to server
  -Junia to add services to Postgres DB


<br/>**Impediments:**

- Pulling DB to the server, must run two terminals at once, awaiting update (also for following sprint)

# Sprint Review
- Our produce is a working product, as it takes one to business links. Two stakeholders were present in the desing review (Team Lead (Junia) Developer (Abdul)).
 - http://cs-people.bu.edu/jjanvier/Jira/2021-03-08%20(2).png
 - https://github.com/Corner-Store/cornerstore/tree/main  (No hosting set up yet, but here's proof of code)
 
# Sprint Retrospective
- Being more intentional in how we divy up tasks, having more team performance check-ins. 
