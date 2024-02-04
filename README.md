# Assignment One
## Purpose
The purpose of this assignment is to setup your GitHub and Heroku (or Rendor) instances for future assignments

You will create a Postman collection and create a REST test within the project. You will need to automate each test and include at least 1 assert for each request in the validation.

## Requirements
- Sign-up for a free GitHub account: https://github.com/ – Homework assignments will be stored on GitHub.
- Create an ECHO server (from lecture) 
- Setup Heroku (or Rendor) to autodeploy your application from your REPO CSC3916_HW1
- Create a PostMan request that posts a body value to your API 
    - Create an environment variable $echo_body for the body of the request
    - Asserts (test) must include
        - Validating string sent is what is returned  (use $echo_body to validate against the response sent back from the server)
        - Response status code (e.g. 200)
        - Response time < 200ms

## Submissions
- All source code should be stored on github (remember .gitignore for node_modules)
- API needs to be deployed to heroku
- Create a readme.md at the root of your github repository with the embedded (markdown) to your test collection
    - Within the collection click the (…), share collection -> Embed
    - Static Button
    - Click update link
    - Include your environment settings
    - Copy to clipboard 
- Submit the Url to canvas with the REPO CSC_3916
- Note: All tests should be testing against your Heroku or Rendor endpoint

## Rubic
- -5 - Not deployed to Heroku or Rendor
- -5 - Missing Postman Test
- -1 - For each missing assert (test)

## Resources
- http://nodejs.org
- http://www.passportjs.org/docs/basic-digest/
- https://devcenter.heroku.com/articles/heroku-cli 
- https://devcenter.heroku.com/articles/config-vars 
- https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/32609256-f28b98a2-a643-4c3b-ad9e-3f455a7ef6a2?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D32609256-f28b98a2-a643-4c3b-ad9e-3f455a7ef6a2%26entityType%3Dcollection%26workspaceId%3D3ce1d2fe-8f82-4636-b3cd-f67a80ca5d01#?env%5BAssignment%200%5D=[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/32609256-f28b98a2-a643-4c3b-ad9e-3f455a7ef6a2?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D32609256-f28b98a2-a643-4c3b-ad9e-3f455a7ef6a2%26entityType%3Dcollection%26workspaceId%3D3ce1d2fe-8f82-4636-b3cd-f67a80ca5d01#?env%5BAssignment%200%5D=W3sia2V5IjoiYm9va190aXRsZSIsInZhbHVlIjoidHVyaW5nIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiJ0dXJpbmciLCJzZXNzaW9uSW5kZXgiOjB9LHsia2V5IjoiYm9va19pZCIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiJxYzRRRUFBQVFCQUoiLCJzZXNzaW9uSW5kZXgiOjF9LHsia2V5IjoiZWNob192YXJpYWJsZSIsInZhbHVlIjoiaGVsbG8gd29ybGQyIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiJoZWxsbyB3b3JsZDIiLCJzZXNzaW9uSW5kZXgiOjJ9XQ==)==)