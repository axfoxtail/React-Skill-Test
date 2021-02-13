## Goal
This repo is a mess both in functionality and the code quality.
Your goal show your knowledge of not only React but coding patterns in general by fixing the known issues and get the code in this repo "Production Ready".
Feel free to leave any comments you feel nessesary to explain your thought proccess.
When you are done please email your work to andrew.watt@compliance.ai.

### Additional Note
This purpose of this assesment is for you to do enough work to show you know what you are doing.
This is not a assement to see if you can fix all the issues in the time limit, but rather this repo is supposed to give you the space to show how you would build things.
I want to see you know how to be build things "correctly" and up to modern standards as you see them.
## Running the Repo
### `yarn start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

## Known Issues
### Summary Toggle not working
Summary stays open after clicking on it and won't close

##### Steps to repo
1. Click on a Document
2. Click on Summary => Summary open
3. Click on Summary Again => ????

##### Expect Behavior

-Summary toggles open and closed


### Search crashing application
##### Steps to repo

1.  Click on a document

2.  Start to search

3.  Application Crashes

##### Expected Behavior

Application does not crash


### Searching not returning expected results
When searching for "women's equality day, 2020" wrong results are returned

##### Steps to repo

1.  Click on a Search Bar

2.  Start typing in `women's equality day, 2020` => wrong results

##### Expected Behavior

-only results that match the title are returned

### Clicking on Topics is not working correctly
When clicking the topics I get strange behavior and the topic I expect to be displayed isn't correct

##### Expected Behavior

-Clicking on any of the topics shows it next to the search bar

-Clicking the x next to the Topic Clears it

## Document Object
This is what our document object looks like in this repo.
```
{
  "agencies": [
    {
      "blacklisted": false,
      "id": 192,
      "jurisdiction": "US",
      "name": "Federal Trade Commission",
      "parent_id": null,
      "popular": false,
      "short_name": "FTC",
      "times_cited": 6203,
      "type": "federal_executive",
      "words": {
        "agency_id": 192,
        "departments": [],
        "subdepartments": [],
        "synonyms": [
          "FTC",
          "Federal Trade Commission"
        ]
      }
    }
  ],
  "category": "Event",
  "id": 6292387,
  "jurisdiction": "US",
  "publication_date": "2020-08-28T17:29:19.819030",
  "summary_text": "Cmr. Chopra meets with the Drycleaning & Laundry Institute Sep 8, 2020 11:00AM Event Description FTC Commissioner Rohit Chopra will meet with the Drycleaning & Laundry Institute (DLI) concerning the FTC's proposal to repeal its rule on the Care Labeling of Textile Wearing Apparel and Certain Piece Goods as Amended.",
  "title": "Cmr. Chopra meets with the Drycleaning & Laundry Institute",
  "topics": [
    {
      "id": 1,
      "judge_count": 0,
      "model_probability": 0.205454367764642,
      "name": "Lending",
      "positive_judgments": 0
    },
    {
      "id": 5,
      "judge_count": 0,
      "model_probability": 0.277535121716698,
      "name": "FCPA/ABAC",
      "positive_judgments": 0
    }
  ],
  "web_url": "https://www.ftc.gov/news-events/events-calendar/cmr-chopra-meets-drycleaning-laundry-institute"
}
```
This is a smaller subset what our real document object looks like.