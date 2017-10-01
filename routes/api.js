const express = require('express');
const redis = require('redis');
const router = express.Router();

// Create Redis Client
let client = redis.createClient();
client.on('connect', function() {
  console.log('Connected to Redis...');
});

var salaryData = [{
    "CASE_NUMBER": "I-200-16286-689715",
    "CASE_STATUS": "CERTIFIED",
    "CASE_SUBMITTED": "10/12/2016",
    "DECISION_DATE": "10/18/2016",
    "VISA_CLASS": "H-1B",
    "EMPLOYMENT_START_DATE": "10/15/2016",
    "EMPLOYMENT_END_DATE": "10/5/2019",
    "EMPLOYER_NAME": "ABSOMAX INC",
    "EMPLOYER_ADDRESS": "39555 ORCHARD HILL PLACE",
    "EMPLOYER_CITY": "NOVI",
    "EMPLOYER_STATE": "MI",
    "EMPLOYER_POSTAL_CODE": 48375,
    "EMPLOYER_COUNTRY": "UNITED STATES OF AMERICA",
    "EMPLOYER_PROVINCE": "",
    "EMPLOYER_PHONE_EXT": "",
    "AGENT_ATTORNEY_NAME": "PARVATHANENI, D.",
    "AGENT_ATTORNEY_CITY": "DALLAS",
    "AGENT_ATTORNEY_STATE": "TX",
    "JOB_TITLE": "JR. BUSINESS ANALYST",
    "SOC_CODE": "15-1121",
    "SOC_NAME": "COMPUTER SYSTEMS ANALYSTS",
    "NAICS_CODE": 541511,
    "TOTAL_WORKERS": 1,
    "FULL_TIME_POSITION": "Y",
    "PREVAILING_WAGE": "50,170.00",
    "PW_UNIT_OF_PAY": "Year",
    "PW_SOURCE": "OES",
    "PW_SOURCE_YEAR": 2016,
    "PW_SOURCE_OTHER": "OFLC ONLINE DATA CENTER",
    "WAGE_RATE_OF_PAY_FROM": "50,170.00",
    "WAGE_RATE_OF_PAY_TO": 0.0,
    "WAGE_UNIT_OF_PAY": "Year",
    "H-1B_DEPENDENT": "N",
    "WILLFUL_VIOLATOR": "N",
    "WORKSITE_CITY": "MEMPHIS",
    "WORKSITE_COUNTY": "SHELBY",
    "WORKSITE_STATE": "TN",
    "WORKSITE_POSTAL_CODE": 38125,
    "ORIGINAL_CERT_DATE": ""
  }

  , {
    "CASE_NUMBER": "I-200-16286-547693",
    "CASE_STATUS": "CERTIFIED",
    "CASE_SUBMITTED": "10/12/2016",
    "DECISION_DATE": "10/18/2016",
    "VISA_CLASS": "H-1B",
    "EMPLOYMENT_START_DATE": "10/15/2016",
    "EMPLOYMENT_END_DATE": "10/5/2019",
    "EMPLOYER_NAME": "ABSOMAX INC",
    "EMPLOYER_ADDRESS": "39555 ORCHARD HILL PLACE",
    "EMPLOYER_CITY": "NOVI",
    "EMPLOYER_STATE": "MI",
    "EMPLOYER_POSTAL_CODE": 48375,
    "EMPLOYER_COUNTRY": "UNITED STATES OF AMERICA",
    "EMPLOYER_PROVINCE": "",
    "EMPLOYER_PHONE_EXT": "",
    "AGENT_ATTORNEY_NAME": "PARVATHANENI, D.",
    "AGENT_ATTORNEY_CITY": "DALLAS",
    "AGENT_ATTORNEY_STATE": "TX",
    "JOB_TITLE": "JR. BUSINESS ANALYST",
    "SOC_CODE": "15-1121",
    "SOC_NAME": "COMPUTER SYSTEMS ANALYSTS",
    "NAICS_CODE": 541511,
    "TOTAL_WORKERS": 1,
    "FULL_TIME_POSITION": "Y",
    "PREVAILING_WAGE": "50,170.00",
    "PW_UNIT_OF_PAY": "Year",
    "PW_SOURCE": "OES",
    "PW_SOURCE_YEAR": 2016,
    "PW_SOURCE_OTHER": "OFLC ONLINE DATA CENTER",
    "WAGE_RATE_OF_PAY_FROM": "50,170.00",
    "WAGE_RATE_OF_PAY_TO": 0.0,
    "WAGE_UNIT_OF_PAY": "Year",
    "H-1B_DEPENDENT": "N",
    "WILLFUL_VIOLATOR": "N",
    "WORKSITE_CITY": "MEMPHIS",
    "WORKSITE_COUNTY": "SHELBY",
    "WORKSITE_STATE": "TN",
    "WORKSITE_POSTAL_CODE": 38125,
    "ORIGINAL_CERT_DATE": "dvafadfvadgfvfdv"
  }
];

router.get('/salary', function(req, res, next) {
  //console.log(req.query.name);
  client.get(req.query.name, function(err, obj) {
    console.log(obj);
    if (!obj) {
      res.send("no data");
    } else {
      res.send(obj);
    }
  });
});


router.post('/salary', function(req, res, next){
  var company_name_key = req.body.name.trim();
  var salaries = salaryData;
  client.set(company_name_key, JSON.stringify(salaries));
  res.send("finished");

});

module.exports = router
