const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('CESection', function () {
  this.timeout(75000)
  beforeEach(async function () {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function () {
    // await driver.quit();
  })
  it('CESection', async function () {
    await driver.get("https://www.breeze.ca.gov/")
    await driver.manage().window().setRect(1280, 777)
    await driver.findElement(By.id("userid")).click()
    await driver.findElement(By.id("userid")).sendKeys("REDACTED")
    await driver.findElement(By.id("password")).sendKeys("REDACTED")
    await driver.findElement(By.name("logon")).click()

    assert(await driver.findElement(By.id("lbl_renew")).getText() == "It is time to Renew!")
    await driver.findElement(By.id("renew00")).click()
    await driver.findElement(By.id("contentBox")).click()
    assert(await driver.findElement(By.css("strong")).getText() == "CALIFORNIA BOARD OF REGISTERED NURSING (BRN), ONLINE LICENSE RENEWAL APPLICATION")
    assert(await driver.findElement(By.css("u")).getText() == "Requirements")
    assert(await driver.findElement(By.css(".instructionFont > p:nth-child(1)")).getText() == "CALIFORNIA BOARD OF REGISTERED NURSING (BRN), ONLINE LICENSE RENEWAL APPLICATION\n\nRequirements\nIn order to renew your RN license you will need to:")
    assert(await driver.findElement(By.css("ol > li:nth-child(1)")).getText() == "Answer the renewal questions")
    assert(await driver.findElement(By.css("ol > li:nth-child(2)")).getText() == "Verify your personal information")
    assert(await driver.findElement(By.css("ol > li:nth-child(3)")).getText() == "Provide information regarding your Continuing Education")
    assert(await driver.findElement(By.css("ol > li:nth-child(4)")).getText() == "Meet the fingerprint requirement*")
    assert(await driver.findElement(By.css("ol > li:nth-child(5)")).getText() == "Certification of Accuracy Statement")
    assert(await driver.findElement(By.css("ol > li:nth-child(6)")).getText() == "Attachments (if needed)")
    assert(await driver.findElement(By.css("li:nth-child(7)")).getText() == "Pay the appropriate renewal fee")
    assert(await driver.findElement(By.css("p:nth-child(3)")).getText() == "Legality of Practice Between Renewal and Receipt of License: Section 121 of the Business and Professions Code provides that a nurse may work pending receipt of his/her renewed license providing the renewal fee has been submitted timely and all renewal requirements have been met.\n\nCertification Reminder: Registered nurses must be certified by the Board in order to use the titles Clinical Nurse Specialist (CNS), Nurse Practitioner (NP), Nurse Practitioner Furnishing (NPF), Nurse Anesthetist (NA), Public Health Nurse (PHN), Nurse-Midwife (NMW), Nurse-Midwife Furnishing (NMF).\n\nAdvanced Practice Certificate Renewals: If you are a PHN, NP, CNS, NA, NMW, or if you possess a furnishing number certificate, you must renew your certificate(s) in addition to your registered nurse license. Each certificate has an associated fee due at time of renewal.\n\nLate Fee: Renewal fees are due prior to the expiration date. A late penalty is added for renewals submitted after the expiration date.\n\n*Fingerprint Requirement: All active licensees must meet the current fingerprint requirement. To determine if you have met this requirement, or if you need to submit new fingerprints, please visit http://www.rn.ca.gov/licensees/ren-fp.shtml. Your renewal may not be approved without valid fingerprint results. Failure to submit a set of fingerprints, if required or directed, is grounds for discipline by the Board.\n\nIf you need to change your current address please go back to the quick start menu by pressing \'Cancel\' and select the \'Address Change\' application.")
    await driver.findElement(By.name("next")).click()
    // await driver.findElement(By.id("contentBox")).click()
    assert(await driver.findElement(By.css(".h2")).getText() == "Registered Nurse Renewal Application - Information Privacy Act")
    assert(await driver.findElement(By.css(".instructionFont > p")).getText() == "INFORMATION COLLECTION AND ACCESS\n\nThe Information Practices Act, Section 1798.17 Civil Code, requires the following information to be provided when collecting information from individuals.\n\nAgency Name: Board of Registered Nursing\n\nTitle of official responsible for information maintenance: Executive Officer\n\nAddress: P.O. BOX 944210, SACRAMENTO, CA 94244-2100\n\nTelephone Number: (916) 322-3350\n\nAuthority which authorizes the maintenance of the information: Section 30, Section 2732.1(a), Business and Professions code all information is mandatory.\n\nThe consequences, if any of not providing all or any part of the requested information: Failure to provide any of the requested information will result in the application being rejected as incomplete.\n\nThe principal purpose(s) for which the information is to be used: Section 30 of the business and professions code and public law 94-455 (42 usca 405(c)(2)(c)) authorize collection of your social security number or individual taxpayer identification number. Your social security number or individual taxpayer identification number will be used exclusively for tax enforcement purposes, for purposes of compliance with any judgment or order for family support in accordance with section 11350.6 of the welfare and institutions code, or for verification of licensure or examination status by a licensing or examination entity which utilizes a national examination where licensure is reciprocal with the requesting state. If you fail to list your social security number or individual taxpayer identification number, your application for initial or renewal license will not be processed. You will be reported to the franchise tax board, which may assess a $100 penalty against you. Your name and address listed on this application will be disclosed to the public upon request if and when you become licensed or renewed.\n\nAny known or foreseeable interagency or intergovernmental transfer which may be made of the information: Possible transfer to law enforcement, other government agencies and reporting social security number or individual taxpayer identification number to the franchise tax board or for child support enforcement purposes pursuant to Section 30 of the business and professions code. Each individual has the right to review the files on records maintained on them by the agency, unless the records are exempt from disclosure.\n\nMandatory Reporter: Under California law each person licensed by the Board of Registered Nursing is a \"Mandated Reporter\" for child abuse or neglect purposes. Prior to commencing his or her employment, and as a prerequisite to that employment, all mandated reporters must sign a statement on a form provided to him or her by his or her employer to the effect that he or she has knowledge of the provisions of Section 11166 and will comply with those provisions.\n\nCalifornia Penal Code Section 11166 requires that all mandated reporters make a report to an agency specified in Penal Code Section 11165.9 [generally law enforcement agencies] whenever the mandated reporter, in his or her professional capacity or within the scope of his or her employment, has knowledge of or observes a child whom the mandated reporter knows or reasonably suspects has been the victim of child abuse or neglect. The mandated reporter must make a report to the agency immediately or as soon as is practicably possible by telephone, and the mandated reporter must prepare and send a written report thereof within 36 hours of receiving the information concerning the incident.\n\nFailure to comply with the requirements of Section 11166 is a misdemeanor, punishable by up to six months in a county jail, by a fine of $1,000, or by both imprisonment and fine.\n\nFor further details, consult Penal Code Section 11164 and subsequent sections.")
    await driver.findElement(By.name("agree")).click()
    // await driver.findElement(By.id("contentBox")).click()
    assert(await driver.findElement(By.id("desc0")).getText() == "Do you have a name change to make with this renewal?")
    await driver.findElement(By.id("false1016")).click()
    await driver.findElement(By.name("next")).click()
    await driver.findElement(By.id("contentBox")).click()
    assert(await driver.findElement(By.css(".h2")).getText() == "Registered Nurse Renewal Application - Application Questions")
    assert(await driver.findElement(By.id("desc0")).getText() == "Since you last renewed your license, have you had a license disciplined by a government agency or other disciplinary body; or have you been convicted of any crime in any state, the USA and its territories, military court or other country? http://www.rn.ca.gov/enforcement/convictions.shtml")
    {
      const dropdown = await driver.findElement(By.name("question_0"))
      // Yes XPATH: //*[@id="form"]/table/tbody/tr[1]/td[2]/select/option[2]
      await dropdown.findElement(By.xpath('//*[@id="form"]/table/tbody/tr[1]/td[2]/select/option[3]')).click()
    }
    assert(await driver.findElement(By.id("desc1")).getText() == "Have you served or are you currently serving in the military?")
    {
      const dropdown = await driver.findElement(By.name("question_1"))
      // Yes XPATH: //*[@id="form"]/table/tbody/tr[2]/td[2]/select/option[2]
      await dropdown.findElement(By.xpath('//*[@id="form"]/table/tbody/tr[2]/td[2]/select/option[3]')).click()
    }
    assert(await driver.findElement(By.id("desc2")).getText() == "Would you be interested in serving as an Expert Practice Consultant for the Board of Registered Nursing? For information regarding the requirements for becoming an Expert Practice Consultant, please visit: http://www.rn.ca.gov/enforcement/expwit.shtml")
    {
      const dropdown = await driver.findElement(By.name("question_2"))
      // Yes XPATH: //*[@id="form"]/table/tbody/tr[3]/td[2]/select/option[2]
      await dropdown.findElement(By.xpath('//*[@id="form"]/table/tbody/tr[3]/td[2]/select/option[3]')).click()
    }
    assert(await driver.findElement(By.id("desc3")).getText() == "Would you be interested in serving as a Nurse Support Group Facilitator for the Board of Registered Nursing? For information regarding the requirements for becoming a Nurse Support Group Facilitator, please visit: rn.ca.gov/intervention")
    {
      const dropdown = await driver.findElement(By.name("question_3"))
      // Yes XPATH: //*[@id="form"]/table/tbody/tr[4]/td[2]/select/option[2]
      await dropdown.findElement(By.xpath('//*[@id="form"]/table/tbody/tr[4]/td[2]/select/option[3]')).click()
    }
    assert(await driver.findElement(By.id("desc4")).getText() == "Would you be interested in serving as an Intervention Evaluation Committee Member for the Board of Registered Nursing? For information regarding the requirements for becoming an Intervention Evaluation Committee Member, please visit: rn.ca.gov/intervention")
    {
      const dropdown = await driver.findElement(By.name("question_4"))
      // Yes XPATH: //*[@id="form"]/table/tbody/tr[5]/td[2]/select/option[2]
      await dropdown.findElement(By.xpath('//*[@id="form"]/table/tbody/tr[5]/td[2]/select/option[3]')).click()
    }
    assert(await driver.findElement(By.id("desc5")).getText() == "Would you be interested in serving as a Continuing Education Course Content Evaluator?")
    {
      const dropdown = await driver.findElement(By.name("question_5"))
      // Yes XPATH: //*[@id="form"]/table/tbody/tr[6]/td[2]/select/option[2]
      await dropdown.findElement(By.xpath('//*[@id="form"]/table/tbody/tr[6]/td[2]/select/option[3]')).click()
    }
    await driver.findElement(By.name("next")).click()
    await driver.findElement(By.id("contentBox")).click()
    assert(await driver.findElement(By.css(".h2")).getText() == "Registered Nurse Renewal Application - Name and Personal Details")
    await driver.findElement(By.name("next")).click()
    await driver.findElement(By.id("contentBox")).click()
    assert(await driver.findElement(By.css(".h2")).getText() == "Registered Nurse Renewal Application - Address Detail Summary")

    // Code to edit address. NEEDS TO ERASE PREVIOUS ADDRESS STILL.
    // await driver.findElement(By.linkText("Address of Record")).click()
    // await driver.findElement(By.id("addressLine1")).sendKeys("2821 W 152nd St")
    // await driver.findElement(By.id("addressLine2")).sendKeys("TODO")
    // await driver.findElement(By.id("addressLine3")).sendKeys("TODO")
    // await driver.findElement(By.id("addrCity")).sendKeys("GARDENA")
    // {
    //   const dropdown = await driver.findElement(By.id("stateCode"))
    //   await dropdown.findElement(By.xpath("option[. = 'California']")).click()
    // }
    // await driver.findElement(By.id("addrZip")).sendKeys("90249-4023")
    // {
    //   const dropdown = await driver.findElement(By.id("countryCode"))
    //   await dropdown.findElement(By.xpath("option[. = 'United States']")).click()
    // }
    // await driver.findElement(By.id("phoneExtension")).sendKeys("TODO")
    // await driver.findElement(By.id("emailAddr")).sendKeys("amanda.meyer.25@gmail.com")
    // await driver.findElement(By.id("addrSpecific1")).sendKeys("310-756-6151")
    // await driver.findElement(By.name("next")).click()
    // await driver.findElement(By.name("next")).click()

    await driver.findElement(By.name("next")).click()
    await driver.findElement(By.id("contentBox")).click()
    // CE Information
    let numOfCE = 15;
    let CEInfo = [
      "Alarm Fatigue Can Endanger Patients", "01/13/2020", "OnCourse Learning", "CEP13213", "1",
      "Recognizing, Diagnosing and Managing Emergent Causes of Low Back Pain", "01/13/2020", "OnCourse Learning", "CEP13213", "1",
      "Evidence-Based Approaches to Pain Control", "01/10/2020", "OnCourse Learning", "CEP13213", "2.5",
      "Pediatric Food Allergies", "02/07/2020", "OnCourse Learning", "CEP13213", "1.5",
      "Pet Therapy", "01/10/2020", "Oncourse Learning", "CEP13213", "1",
      "Rhythm Recognition: Getting to the Heart of the Matter", "01/15/2020", "OnCourse Learning", "CEP13213", "3.75",
      "Activating a Stroke Alert: A Neurological Emergency", "01/10/2020", "OnCourse Learning", "CEP13213", "1",
      "Stroke Update - 2019", "09/18/2019", "Torrance Memorial Medical Center", "CEP 300", "4",
      "Understanding the Chest X-Ray Part 1", "01/10/2020", "OnCourse Learning", "CEP13213", "1",
      "Gastroesophageal Reflux Disease: Infancy Through Adulthood", "01/17/2020", "OnCourse Learning", "CEP13213", "1.5",
      "Management of Community-Acquired Pneumonia", "01/13/2020", "OnCourse Learning", "CEP13213", "1",
      "NIH Stroke Scale - Test Group A", "05/13/2019", "American Heart Association", "8339440", "2",
      "Opioid Use Disorder and Pregnancy, Part 1: What does Evidence-Based Care Look Like?", "02/08/2020", "OnCourse Learning", "CEP13213", "0.5",
      "Workplace Violence Prevention", "07/10/2019", "Torrance Memorial Medical Center", "CEP 300", "4",
      "Advanced Cardiac Life Support (ACLS) Program", "02/17/2020", "VillanuevaCPR Inc.", "14677", "6"
    ]

    for (let i = 0; i < CEInfo.length; i++) {
      if (CEInfo[i].length > 40) {
        CEInfo[i] = CEInfo[i].substring(0, 37);
        CEInfo[i] += "...";
      }
    }
    for (let i = 0; i < numOfCE; i++) {
      assert(await driver.findElement(By.css(".h2")).getText() == "Registered Nurse Renewal Application - CE Information - Information")
      assert(await driver.findElement(By.css("#contentBox > .instructionFont:nth-child(5)")).getText() == "Registered nurses are required by law to complete 30 hours of continuing education (CE) to renew their license in an active status. Courses must be completed during the preceding 2 year period.\n\nIf using academic courses taken for CE credit, use the following breakdown to compute the number of hours: 1 quarter unit = 10 contact hours; and 1 semester unit = 15 contact hours.\n\nCE Certificates: You are required to keep certificates or grade slips for four years as proof of completion in case of an audit.\n\nCE Exemption For Certain First-Time Renewals: If you obtained your initial RN license by passing the national licensing examination (NCLEX-RN) within the past two years and this is your first renewal, you are exempt from the CE requirement. Please enter EXEMPT as the Course Name, NCLEX as the Providers name, today\'s date as the Date of Completion and 30 as the Number of CE Hours.\n\nIf renewing Inactive, enter \'Renewing Inactive\' as course name and enter \'30\' as the Number of CE Hours.")
      await driver.findElement(By.name("add")).click()
      // await driver.findElement(By.id("contentBox")).click()
      if (!(await driver.findElement(By.css(".h2")).getText() == "Registered Nurse Renewal Application - CE Information - Add") && await driver.findElement(By.css(".h2")).getText() == "Registered Nurse Renewal Application - CE Information - Information") {
        await driver.findElement(By.name("add")).click()
      }
      await driver.findElement(By.id("rsdDataValue0")).sendKeys(CEInfo[i * 5])
      await driver.findElement(By.id("rsdDataValue1")).sendKeys(Key.LEFT)
      await driver.findElement(By.id("rsdDataValue1")).sendKeys(Key.LEFT)
      await driver.findElement(By.id("rsdDataValue1")).sendKeys(Key.LEFT)
      await driver.findElement(By.id("rsdDataValue1")).sendKeys(Key.LEFT)
      await driver.findElement(By.id("rsdDataValue1")).sendKeys(CEInfo[(i * 5) + 1])
      await driver.findElement(By.id("rsdDataValue2")).sendKeys(CEInfo[(i * 5) + 2])
      await driver.findElement(By.id("rsdDataValue3")).sendKeys(CEInfo[(i * 5) + 3])
      await driver.findElement(By.id("rsdDataValue4")).sendKeys(CEInfo[(i * 5) + 4])
      await driver.findElement(By.name("done")).click()
      //*[@id="contentBox"]/form/div/table/tbody/tr[1]/td[1]/span
      let timeCount = 0;
      //*[@id="contentBox"]/form/div/table/tbody/tr/td[1]/span
      if (i == 0) {
        while (true) {
          try {
            if (await driver.findElement(By.xpath('//*[@id="contentBox"]/form/div/table/tbody/tr/td[1]/span')).getText() == CEInfo[i * 5]) {
              // await driver.findElement(By.xpath('*[@id="contentBox"]/form/div/table/tbody/tr/td[1]/span')).getText() == CEInfo[i * 5];
              assert(await driver.findElement(By.xpath('//*[@id="contentBox"]/form/div/table/tbody/tr/td[2]/span')).getText() == CEInfo[(i * 5) + 1]);
              assert(await driver.findElement(By.xpath('//*[@id="contentBox"]/form/div/table/tbody/tr/td[3]/span')).getText() == CEInfo[(i * 5) + 2]);
              assert(await driver.findElement(By.xpath('//*[@id="contentBox"]/form/div/table/tbody/tr/td[4]/span')).getText() == CEInfo[(i * 5) + 3]);
              assert(await driver.findElement(By.xpath('//*[@id="contentBox"]/form/div/table/tbody/tr/td[5]/span')).getText() == CEInfo[(i * 5) + 4]);
              break;
            }
            else if (timeCount > 5) {
              throw new Error("Timed out after inputting CE Info");
            }
          } catch (e) {
            console.log("timeCount is: " + timeCount.toString());
            console.log(e);
            timeCount++;
            await sleep(1000);
          }
        }
      }
      else {
        while (true) {
          try {
            if (await driver.findElement(By.xpath('//*[@id="contentBox"]/form/div/table/tbody/tr[' + (i + 1).toString() + ']/td[1]/span')).getText() == CEInfo[i * 5]) {
              // await driver.findElement(By.xpath('*[@id="contentBox"]/form/div/table/tbody/tr[' + (i + 1).toString() + ']/td[1]/span')).getText() == CEInfo[i * 5];
              assert(await driver.findElement(By.xpath('//*[@id="contentBox"]/form/div/table/tbody/tr[' + (i + 1).toString() + ']/td[2]/span')).getText() == CEInfo[(i * 5) + 1]);
              assert(await driver.findElement(By.xpath('//*[@id="contentBox"]/form/div/table/tbody/tr[' + (i + 1).toString() + ']/td[3]/span')).getText() == CEInfo[(i * 5) + 2]);
              assert(await driver.findElement(By.xpath('//*[@id="contentBox"]/form/div/table/tbody/tr[' + (i + 1).toString() + ']/td[4]/span')).getText() == CEInfo[(i * 5) + 3]);
              assert(await driver.findElement(By.xpath('//*[@id="contentBox"]/form/div/table/tbody/tr[' + (i + 1).toString() + ']/td[5]/span')).getText() == CEInfo[(i * 5) + 4]);
              break;
            }
            else if (timeCount > 5) {
              throw new Error("Timed out after inputting CE Info");
            }
          } catch (e) {
            console.log("timeCount is: " + timeCount.toString());
            console.log(e);
            timeCount++;
            await sleep(1000);
          }
        }
      }
    }

    await driver.findElement(By.name("next")).click()

    // Questions
    if (await driver.findElement(By.css(".h2")).getText() == "Registered Nurse Renewal Application - CE Information - Information") {
      await driver.findElement(By.name("next")).click()
    }
    assert(await driver.findElement(By.css(".h2")).getText() == "Registered Nurse Renewal Application - Questions - Information")
    assert(await driver.findElement(By.id("rsdDataValueLabel0")).getText() == "1) Please select Active or Inactive. If your RN license is inactive or renewed to inactive you cannot practice as a registered nurse.")
    await driver.findElement(By.id("rsdDataValue0_0")).click()
    assert(await driver.findElement(By.css("#rowForRsdCol5661 > .labelCell:nth-child(2)")).getText() == "2) Since you last renewed your license, have you had a license disciplined by a government agency or other disciplinary body; or have you been convicted of any crime in any state, the USA and its territories, military court or other country?")
    await driver.findElement(By.id("rsdDataValue2_0")).click()
    await driver.findElement(By.id("rsdDataValue2_1")).click()
    assert(await driver.findElement(By.id("rsdDataValueLabel3")).getText() == "3) Have you complied with the fingerprint requirement?")
    await driver.findElement(By.id("rsdDataValue3_1")).click()
    await driver.findElement(By.id("rsdDataValue3_0")).click()
    assert(await driver.findElement(By.css("blockquote")).getText() == "Fingerprint Requirement: If you are renewing your license to an ACTIVE status and were fingerprinted prior to 2009, you are required to furnish a full set of fingerprints, as directed by the Board for BOTH levels of service (DOJ and FBI). To determine if you have met this requirement, or if you need to submit new fingerprints, please visit http://www.rn.ca.gov/licensees/ren-fp.shtml . Your renewal may not be approved without valid fingerprint results. Please fax your completed Live Scan to (916) 574-7700. Failure to submit a set of fingerprints, if required or directed, is grounds for discipline by the Board.")
    assert(await driver.findElement(By.id("rsdDataValueLabel4")).getText() == "4) Have you completed 30 hours or more of continuing education within the last two years or are you exempted from the CE requirement based on first-time renewal status?")
    await driver.findElement(By.id("rsdDataValue4No")).click()
    await driver.findElement(By.id("rsdDataValue4Yes")).click()
    await driver.findElement(By.name("next")).click()
    assert(await driver.findElement(By.css(".h2")).getText() == "Registered Nurse Renewal Application - Follow-Up Renewal Instructions - Information")
    assert(await driver.findElement(By.css("ul:nth-child(3) > li:nth-child(3)")).getText() == "Please click on the details box which will tell you if you are required to submit new fingerprints.")
    await driver.findElement(By.id("rsdDataValue0_0")).click()
    await driver.findElement(By.name("next")).click()
    assert(await driver.findElement(By.css(".h2")).getText() == "Registered Nurse Renewal Application - Work Location - Information")
    assert(await driver.findElement(By.css("#contentBox > .instructionFont:nth-child(5)")).getText() == "Please consider completing the following optional survey questions relating to your work in the healing arts profession. Completion of the survey helps determine health professionals\' shortages and improves access to patient care. If you do not wish to complete this component of the survey, select \'Next\' at the bottom of the screen to proceed forward with your application.\n\nPlease select \'Add\' below to add information relevant to one or more of your current work locations. You will be allowed to enter more than one work location.")

    // Work Location (Comment out to skip survey)
    // assert(await driver.findElement(By.css(".h2")).getText() == "Registered Nurse Renewal Application - Work Location - Add")
    // assert(await driver.findElement(By.css("#contentBox > .instructionFont:nth-child(5)")).getText() == "Please consider completing the following optional survey questions relating to your work in the healing arts profession. Completion of the survey helps determine health professionals\' shortages and improves access to patient care. If you do not wish to complete this component of the survey, select \'Next\' at the bottom of the screen to proceed forward with your application.\n\nPlease select \'Add\' below to add information relevant to one or more of your current work locations. You will be allowed to enter more than one work location.")
    // assert(await driver.findElement(By.id("rsdDataValueLabel0")).getText() == "Years with Employer:")
    // await driver.findElement(By.id("rsdDataValue0")).sendKeys("1")
    // await driver.findElement(By.id("rsdDataValue1No")).click()
    // assert(await driver.findElement(By.id("rsdDataValueLabel2")).getText() == "County:")
    // await driver.findElement(By.id("rsdDataValue2")).sendKeys("Santa Clara")
    // assert(await driver.findElement(By.id("rsdDataValueLabel3")).getText() == "Zip Code:")
    // await driver.findElement(By.id("rsdDataValue3")).sendKeys("95111")
    // assert(await driver.findElement(By.id("rsdDataValueLabel4")).getText() == "Health Occupation:")
    // await driver.findElement(By.id("rsdDataValue4")).sendKeys("Nurse")
    // assert(await driver.findElement(By.id("rsdDataValueLabel5")).getText() == "Work Hours:")
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue5"))
    //   await dropdown.findElement(By.xpath("option[. = '40+']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue5"))
    //   await dropdown.findElement(By.xpath("option[. = '30-39']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue5"))
    //   await dropdown.findElement(By.xpath("option[. = '20-29']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue5"))
    //   await dropdown.findElement(By.xpath("option[. = '10-19']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue5"))
    //   await dropdown.findElement(By.xpath("option[. = '1-9']")).click()
    // }
    // assert(await driver.findElement(By.id("rsdDataValueLabel6")).getText() == "Acute Care Hospital:")
    // await driver.findElement(By.id("rsdDataValue6Yes")).click()
    // assert(await driver.findElement(By.id("rsdDataValueLabel7")).getText() == "Home Care/Durable Medical Equipment:")
    // await driver.findElement(By.id("rsdDataValue7No")).click()
    // assert(await driver.findElement(By.id("rsdDataValueLabel8")).getText() == "Long-Term Acute Care:")
    // await driver.findElement(By.id("rsdDataValue8No")).click()
    // assert(await driver.findElement(By.id("rsdDataValueLabel9")).getText() == "Skilled Nursing Facility:")
    // await driver.findElement(By.id("rsdDataValue9Yes")).click()
    // await driver.findElement(By.id("rsdDataValue9No")).click()
    // assert(await driver.findElement(By.id("rsdDataValueLabel10")).getText() == "Accredited Education Program:")
    // await driver.findElement(By.id("rsdDataValue10Yes")).click()
    // await driver.findElement(By.id("rsdDataValue10No")).click()
    // assert(await driver.findElement(By.id("rsdDataValueLabel11")).getText() == "Manufacturer/Distributer:")
    // await driver.findElement(By.id("rsdDataValue11Yes")).click()
    // await driver.findElement(By.id("rsdDataValue11No")).click()
    // assert(await driver.findElement(By.id("rsdDataValueLabel12")).getText() == "Outpatient:")
    // await driver.findElement(By.id("rsdDataValue12Yes")).click()
    // await driver.findElement(By.id("rsdDataValue12No")).click()
    // assert(await driver.findElement(By.id("rsdDataValueLabel13")).getText() == "Clinic/Community Health Center:")
    // await driver.findElement(By.id("rsdDataValue13Yes")).click()
    // await driver.findElement(By.id("rsdDataValue13No")).click()
    // assert(await driver.findElement(By.id("rsdDataValueLabel14")).getText() == "Other Work Setting:")
    // await driver.findElement(By.id("rsdDataValue14")).sendKeys("otherWorkSetting")
    // assert(await driver.findElement(By.id("rsdDataValueLabel15")).getText() == "% Patient Care:")
    // await driver.findElement(By.id("rsdDataValue15")).sendKeys("50")
    // assert(await driver.findElement(By.id("rsdDataValueLabel16")).getText() == "% Research:")
    // await driver.findElement(By.id("rsdDataValue16")).sendKeys("50")
    // assert(await driver.findElement(By.id("rsdDataValueLabel17")).getText() == "% Teaching:")
    // await driver.findElement(By.id("rsdDataValue17")).sendKeys("50")
    // assert(await driver.findElement(By.id("rsdDataValueLabel18")).getText() == "% Administration:")
    // await driver.findElement(By.id("rsdDataValue18")).sendKeys("50")
    // assert(await driver.findElement(By.id("rsdDataValueLabel19")).getText() == "% Other:")
    // await driver.findElement(By.id("rsdDataValue19")).sendKeys("50")
    // await driver.findElement(By.name("done")).click()
    // await driver.findElement(By.name("next")).click()
    // assert(await driver.findElement(By.css(".h2")).getText() == "Registered Nurse Renewal Application - Healing Art Survey - Information")
    // assert(await driver.findElement(By.css("#contentBox > .instructionFont:nth-child(5)")).getText() == "Please consider completing the following optional survey questions relating to your healing arts profession. Completion of the survey helps determine health professionals\' shortages and improves access to patient care. If you do not wish to complete this component of the survey, select \'Next\' at the bottom of the screen to proceed forward with your application.")
    // assert(await driver.findElement(By.id("rsdDataValueLabel0")).getText() == "Are you presently pursuing credentials or certifications in addition to your previously obtained qualifying degree?")
    // await driver.findElement(By.id("rsdDataValue0_0")).click()
    // await driver.findElement(By.id("rsdDataValue0_1")).click()
    // assert(await driver.findElement(By.id("rsdDataValueLabel1")).getText() == "If you answered \'Yes\' to the previous question, please enter the name of the credential/certification:")
    // await driver.findElement(By.id("rsdDataValue1")).sendKeys("certificationName")
    // assert(await driver.findElement(By.id("rsdDataValueLabel2")).getText() == "If you are pursuing additional credentials or certifications, what is the expected year of completion (e.g. 2018)?")
    // await driver.findElement(By.id("rsdDataValue2")).sendKeys("yearOfCompletion")
    // assert(await driver.findElement(By.id("rsdDataValueLabel3")).getText() == "If applicable, please enter the name of the school at which you are pursuing your additional credential/certification:")
    // await driver.findElement(By.id("rsdDataValue3")).sendKeys("nameOfSchool")
    // assert(await driver.findElement(By.id("rsdDataValueLabel4")).getText() == "If applicable, please enter the address of the school at which you are pursuing your additional credential/certification:")
    // await driver.findElement(By.id("rsdDataValue4")).sendKeys("addressOfSchool")
    // assert(await driver.findElement(By.id("rsdDataValueLabel5")).getText() == "If you identify your cultural/ethnic background as African American, please select \'Yes.\'")
    // await driver.findElement(By.id("rsdDataValue5Yes")).click()
    // await driver.findElement(By.id("rsdDataValue5No")).click()
    // assert(await driver.findElement(By.id("rsdDataValueLabel6")).getText() == "If you identify your cultural/ethnic background as American Indian/Native American/Alaskan Native, please select \'Yes.\'")
    // await driver.findElement(By.id("rsdDataValue6Yes")).click()
    // await driver.findElement(By.id("rsdDataValue6No")).click()
    // assert(await driver.findElement(By.id("rsdDataValueLabel7")).getText() == "If you identify your cultural/ethnic background as Caucasian/White European/Middle Eastern, please select \'Yes.\'")
    // await driver.findElement(By.id("rsdDataValue7Yes")).click()
    // await driver.findElement(By.id("rsdDataValue7No")).click()
    // assert(await driver.findElement(By.id("rsdDataValueLabel8")).getText() == "If you identify your cultural/ethnic background as Latino/Hispanic, please select \'Yes.\'")
    // await driver.findElement(By.id("rsdDataValue8Yes")).click()
    // await driver.findElement(By.id("rsdDataValue8No")).click()
    // assert(await driver.findElement(By.id("rsdDataValueLabel9")).getText() == "If you identify your cultural/ethnic background as Latino/Hispanic, please select the appropriate value from the dropdown options.")
    // await driver.findElement(By.id("rsdDataValue9")).click()
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue9"))
    //   await dropdown.findElement(By.xpath("option[. = 'Central American']")).click()
    // }
    // await driver.findElement(By.id("rsdDataValue9")).click()
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue9"))
    //   await dropdown.findElement(By.xpath("option[. = 'Cuban']")).click()
    // }
    // await driver.findElement(By.id("rsdDataValue9")).click()
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue9"))
    //   await dropdown.findElement(By.xpath("option[. = 'Mexican']")).click()
    // }
    // await driver.findElement(By.id("rsdDataValue9")).click()
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue9"))
    //   await dropdown.findElement(By.xpath("option[. = 'Puerto Rican']")).click()
    // }
    // await driver.findElement(By.id("rsdDataValue9")).click()
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue9"))
    //   await dropdown.findElement(By.xpath("option[. = 'South American']")).click()
    // }
    // await driver.findElement(By.id("rsdDataValue9")).click()
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue9"))
    //   await dropdown.findElement(By.xpath("option[. = 'Other Hispanic']")).click()
    // }
    // assert(await driver.findElement(By.id("rsdDataValueLabel10")).getText() == "If you identify your cultural/ethnic background as Asian, please select \'Yes.\'")
    // await driver.findElement(By.id("rsdDataValue10Yes")).click()
    // await driver.findElement(By.id("rsdDataValue10No")).click()
    // await driver.findElement(By.id("rsdDataValue11")).click()
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue11"))
    //   await dropdown.findElement(By.xpath("option[. = 'Cambodian']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue11"))
    //   await dropdown.findElement(By.xpath("option[. = 'Chinese']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue11"))
    //   await dropdown.findElement(By.xpath("option[. = 'Hmong']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue11"))
    //   await dropdown.findElement(By.xpath("option[. = 'Indian']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue11"))
    //   await dropdown.findElement(By.xpath("option[. = 'Indonesian']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue11"))
    //   await dropdown.findElement(By.xpath("option[. = 'Laotian']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue11"))
    //   await dropdown.findElement(By.xpath("option[. = 'Malaysian']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue11"))
    //   await dropdown.findElement(By.xpath("option[. = 'Pakistani']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue11"))
    //   await dropdown.findElement(By.xpath("option[. = 'Singaporean']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue11"))
    //   await dropdown.findElement(By.xpath("option[. = 'Thai']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue11"))
    //   await dropdown.findElement(By.xpath("option[. = 'Vietnamese']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue11"))
    //   await dropdown.findElement(By.xpath("option[. = 'Other']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue11"))
    //   await dropdown.findElement(By.xpath("option[. = 'Korean']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue11"))
    //   await dropdown.findElement(By.xpath("option[. = 'Japanese']")).click()
    // }
    // assert(await driver.findElement(By.id("rsdDataValueLabel12")).getText() == "If you identify your cultural/ethnic background as Native Hawaiian/Pacific Islander, please select \'Yes.\'")
    // await driver.findElement(By.id("rsdDataValue12Yes")).click()
    // await driver.findElement(By.id("rsdDataValue12No")).click()
    // await driver.findElement(By.id("rsdDataValue13")).click()
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue13"))
    //   await dropdown.findElement(By.xpath("option[. = 'Fijian']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue13"))
    //   await dropdown.findElement(By.xpath("option[. = 'Filipino']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue13"))
    //   await dropdown.findElement(By.xpath("option[. = 'Guamanian']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue13"))
    //   await dropdown.findElement(By.xpath("option[. = 'Hawaiian']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue13"))
    //   await dropdown.findElement(By.xpath("option[. = 'Samoan']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue13"))
    //   await dropdown.findElement(By.xpath("option[. = 'Tongan']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue13"))
    //   await dropdown.findElement(By.xpath("option[. = 'Other Pacific Islander']")).click()
    // }
    // assert(await driver.findElement(By.id("rsdDataValueLabel14")).getText() == "If you do not identify with any of the cultural/ethnic backgrounds listed in this survey, please select \'Yes.\'")
    // await driver.findElement(By.id("rsdDataValue14Yes")).click()
    // await driver.findElement(By.id("rsdDataValue14No")).click()
    // assert(await driver.findElement(By.id("rsdDataValueLabel15")).getText() == "If you decline to state your cultural/ethnic background, please select \'Yes.\'")
    // await driver.findElement(By.id("rsdDataValue15Yes")).click()
    // await driver.findElement(By.id("rsdDataValue15No")).click()
    // assert(await driver.findElement(By.id("rsdDataValueLabel16")).getText() == "Are you fluent in languages other than English? If yes, please identify these languages in the drop downs below.")
    // await driver.findElement(By.id("rsdDataValue16Yes")).click()
    // await driver.findElement(By.id("rsdDataValue16No")).click()
    // assert(await driver.findElement(By.id("rsdDataValueLabel17")).getText() == "Language 1:")
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue17"))
    //   await dropdown.findElement(By.xpath("option[. = 'Afrikaans']")).click()
    // }
    // assert(await driver.findElement(By.id("rsdDataValueLabel18")).getText() == "Language 2:")
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue18"))
    //   await dropdown.findElement(By.xpath("option[. = 'Albanian']")).click()
    // }
    // assert(await driver.findElement(By.id("rsdDataValueLabel19")).getText() == "Language 3:")
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue19"))
    //   await dropdown.findElement(By.xpath("option[. = 'American Sign Language']")).click()
    // }
    // assert(await driver.findElement(By.id("rsdDataValueLabel20")).getText() == "Language 4:")
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue20"))
    //   await dropdown.findElement(By.xpath("option[. = 'Amharic']")).click()
    // }
    // assert(await driver.findElement(By.id("rsdDataValueLabel21")).getText() == "Please select the value from the dropdown that best represents when you plan to retire.")
    // await driver.findElement(By.id("rsdDataValue21")).click()
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue21"))
    //   await dropdown.findElement(By.xpath("option[. = 'Within the next 2 years']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue21"))
    //   await dropdown.findElement(By.xpath("option[. = 'Within the next 5 years']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue21"))
    //   await dropdown.findElement(By.xpath("option[. = 'Within the next 10 years']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue21"))
    //   await dropdown.findElement(By.xpath("option[. = 'Not planning to retire within the next 10 years']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue21"))
    //   await dropdown.findElement(By.xpath("option[. = 'Already Retired']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue21"))
    //   await dropdown.findElement(By.xpath("option[. = 'Retired, work part time']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue21"))
    //   await dropdown.findElement(By.xpath("option[. = 'Plan to work part time']")).click()
    // }
    await driver.findElement(By.name("next")).click()

    // Healing Art Survey (Comment out to skip survey)
    // assert(await driver.findElement(By.css(".h2")).getText() == "Registered Nurse Renewal Application - Healing Art Survey - Information")
    // assert(await driver.findElement(By.css("#contentBox > .instructionFont:nth-child(5)")).getText() == "Please consider completing the following optional survey questions relating to your healing arts profession. Completion of the survey helps determine health professionals\' shortages and improves access to patient care. If you do not wish to complete this component of the survey, select \'Next\' at the bottom of the screen to proceed forward with your application.")
    // assert(await driver.findElement(By.id("rsdDataValueLabel0")).getText() == "Are you presently pursuing credentials or certifications in addition to your previously obtained qualifying degree?")
    // await driver.findElement(By.id("rsdDataValue0_0")).click()
    // await driver.findElement(By.id("rsdDataValue0_1")).click()
    // assert(await driver.findElement(By.id("rsdDataValueLabel1")).getText() == "If you answered \'Yes\' to the previous question, please enter the name of the credential/certification:")
    // await driver.findElement(By.id("rsdDataValue1")).sendKeys("certificationName")
    // assert(await driver.findElement(By.id("rsdDataValueLabel2")).getText() == "If you are pursuing additional credentials or certifications, what is the expected year of completion (e.g. 2018)?")
    // await driver.findElement(By.id("rsdDataValue2")).sendKeys("yearOfCompletion")
    // assert(await driver.findElement(By.id("rsdDataValueLabel3")).getText() == "If applicable, please enter the name of the school at which you are pursuing your additional credential/certification:")
    // await driver.findElement(By.id("rsdDataValue3")).sendKeys("nameOfSchool")
    // assert(await driver.findElement(By.id("rsdDataValueLabel4")).getText() == "If applicable, please enter the address of the school at which you are pursuing your additional credential/certification:")
    // await driver.findElement(By.id("rsdDataValue4")).sendKeys("addressOfSchool")
    // assert(await driver.findElement(By.id("rsdDataValueLabel5")).getText() == "If you identify your cultural/ethnic background as African American, please select \'Yes.\'")
    // await driver.findElement(By.id("rsdDataValue5Yes")).click()
    // await driver.findElement(By.id("rsdDataValue5No")).click()
    // assert(await driver.findElement(By.id("rsdDataValueLabel6")).getText() == "If you identify your cultural/ethnic background as American Indian/Native American/Alaskan Native, please select \'Yes.\'")
    // await driver.findElement(By.id("rsdDataValue6Yes")).click()
    // await driver.findElement(By.id("rsdDataValue6No")).click()
    // assert(await driver.findElement(By.id("rsdDataValueLabel7")).getText() == "If you identify your cultural/ethnic background as Caucasian/White European/Middle Eastern, please select \'Yes.\'")
    // await driver.findElement(By.id("rsdDataValue7Yes")).click()
    // await driver.findElement(By.id("rsdDataValue7No")).click()
    // assert(await driver.findElement(By.id("rsdDataValueLabel8")).getText() == "If you identify your cultural/ethnic background as Latino/Hispanic, please select \'Yes.\'")
    // await driver.findElement(By.id("rsdDataValue8Yes")).click()
    // await driver.findElement(By.id("rsdDataValue8No")).click()
    // assert(await driver.findElement(By.id("rsdDataValueLabel9")).getText() == "If you identify your cultural/ethnic background as Latino/Hispanic, please select the appropriate value from the dropdown options.")
    // await driver.findElement(By.id("rsdDataValue9")).click()
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue9"))
    //   await dropdown.findElement(By.xpath("option[. = 'Central American']")).click()
    // }
    // await driver.findElement(By.id("rsdDataValue9")).click()
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue9"))
    //   await dropdown.findElement(By.xpath("option[. = 'Cuban']")).click()
    // }
    // await driver.findElement(By.id("rsdDataValue9")).click()
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue9"))
    //   await dropdown.findElement(By.xpath("option[. = 'Mexican']")).click()
    // }
    // await driver.findElement(By.id("rsdDataValue9")).click()
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue9"))
    //   await dropdown.findElement(By.xpath("option[. = 'Puerto Rican']")).click()
    // }
    // await driver.findElement(By.id("rsdDataValue9")).click()
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue9"))
    //   await dropdown.findElement(By.xpath("option[. = 'South American']")).click()
    // }
    // await driver.findElement(By.id("rsdDataValue9")).click()
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue9"))
    //   await dropdown.findElement(By.xpath("option[. = 'Other Hispanic']")).click()
    // }
    // assert(await driver.findElement(By.id("rsdDataValueLabel10")).getText() == "If you identify your cultural/ethnic background as Asian, please select \'Yes.\'")
    // await driver.findElement(By.id("rsdDataValue10Yes")).click()
    // await driver.findElement(By.id("rsdDataValue10No")).click()
    // await driver.findElement(By.id("rsdDataValue11")).click()
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue11"))
    //   await dropdown.findElement(By.xpath("option[. = 'Cambodian']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue11"))
    //   await dropdown.findElement(By.xpath("option[. = 'Chinese']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue11"))
    //   await dropdown.findElement(By.xpath("option[. = 'Hmong']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue11"))
    //   await dropdown.findElement(By.xpath("option[. = 'Indian']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue11"))
    //   await dropdown.findElement(By.xpath("option[. = 'Indonesian']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue11"))
    //   await dropdown.findElement(By.xpath("option[. = 'Laotian']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue11"))
    //   await dropdown.findElement(By.xpath("option[. = 'Malaysian']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue11"))
    //   await dropdown.findElement(By.xpath("option[. = 'Pakistani']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue11"))
    //   await dropdown.findElement(By.xpath("option[. = 'Singaporean']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue11"))
    //   await dropdown.findElement(By.xpath("option[. = 'Thai']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue11"))
    //   await dropdown.findElement(By.xpath("option[. = 'Vietnamese']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue11"))
    //   await dropdown.findElement(By.xpath("option[. = 'Other']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue11"))
    //   await dropdown.findElement(By.xpath("option[. = 'Korean']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue11"))
    //   await dropdown.findElement(By.xpath("option[. = 'Japanese']")).click()
    // }
    // assert(await driver.findElement(By.id("rsdDataValueLabel12")).getText() == "If you identify your cultural/ethnic background as Native Hawaiian/Pacific Islander, please select \'Yes.\'")
    // await driver.findElement(By.id("rsdDataValue12Yes")).click()
    // await driver.findElement(By.id("rsdDataValue12No")).click()
    // await driver.findElement(By.id("rsdDataValue13")).click()
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue13"))
    //   await dropdown.findElement(By.xpath("option[. = 'Fijian']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue13"))
    //   await dropdown.findElement(By.xpath("option[. = 'Filipino']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue13"))
    //   await dropdown.findElement(By.xpath("option[. = 'Guamanian']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue13"))
    //   await dropdown.findElement(By.xpath("option[. = 'Hawaiian']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue13"))
    //   await dropdown.findElement(By.xpath("option[. = 'Samoan']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue13"))
    //   await dropdown.findElement(By.xpath("option[. = 'Tongan']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue13"))
    //   await dropdown.findElement(By.xpath("option[. = 'Other Pacific Islander']")).click()
    // }
    // assert(await driver.findElement(By.id("rsdDataValueLabel14")).getText() == "If you do not identify with any of the cultural/ethnic backgrounds listed in this survey, please select \'Yes.\'")
    // await driver.findElement(By.id("rsdDataValue14Yes")).click()
    // await driver.findElement(By.id("rsdDataValue14No")).click()
    // assert(await driver.findElement(By.id("rsdDataValueLabel15")).getText() == "If you decline to state your cultural/ethnic background, please select \'Yes.\'")
    // await driver.findElement(By.id("rsdDataValue15Yes")).click()
    // await driver.findElement(By.id("rsdDataValue15No")).click()
    // assert(await driver.findElement(By.id("rsdDataValueLabel16")).getText() == "Are you fluent in languages other than English? If yes, please identify these languages in the drop downs below.")
    // await driver.findElement(By.id("rsdDataValue16Yes")).click()
    // await driver.findElement(By.id("rsdDataValue16No")).click()
    // assert(await driver.findElement(By.id("rsdDataValueLabel17")).getText() == "Language 1:")
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue17"))
    //   await dropdown.findElement(By.xpath("option[. = 'Afrikaans']")).click()
    // }
    // assert(await driver.findElement(By.id("rsdDataValueLabel18")).getText() == "Language 2:")
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue18"))
    //   await dropdown.findElement(By.xpath("option[. = 'Albanian']")).click()
    // }
    // assert(await driver.findElement(By.id("rsdDataValueLabel19")).getText() == "Language 3:")
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue19"))
    //   await dropdown.findElement(By.xpath("option[. = 'American Sign Language']")).click()
    // }
    // assert(await driver.findElement(By.id("rsdDataValueLabel20")).getText() == "Language 4:")
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue20"))
    //   await dropdown.findElement(By.xpath("option[. = 'Amharic']")).click()
    // }
    // assert(await driver.findElement(By.id("rsdDataValueLabel21")).getText() == "Please select the value from the dropdown that best represents when you plan to retire.")
    // await driver.findElement(By.id("rsdDataValue21")).click()
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue21"))
    //   await dropdown.findElement(By.xpath("option[. = 'Within the next 2 years']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue21"))
    //   await dropdown.findElement(By.xpath("option[. = 'Within the next 5 years']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue21"))
    //   await dropdown.findElement(By.xpath("option[. = 'Within the next 10 years']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue21"))
    //   await dropdown.findElement(By.xpath("option[. = 'Not planning to retire within the next 10 years']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue21"))
    //   await dropdown.findElement(By.xpath("option[. = 'Already Retired']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue21"))
    //   await dropdown.findElement(By.xpath("option[. = 'Retired, work part time']")).click()
    // }
    // {
    //   const dropdown = await driver.findElement(By.id("rsdDataValue21"))
    //   await dropdown.findElement(By.xpath("option[. = 'Plan to work part time']")).click()
    // }
    await driver.findElement(By.name("next")).click()

    // File Attachments

    let fileNames = ["Alarm_Fatigue_CEU.pdf",
      "Causes_of_Low_Back_Pain_CEU.pdf",
      "CEU 12 (ACLS).pdf",
      "Evidence-Based_Pain_Control_CEU.pdf",
      "Gastroesophageal_Reflux_Disease_CEU.pdf",
      "Management_of_Community-Acquired_Penumonia_CEU.pdf",
      "NIH_Stroke_Scale_CEU.pdf",
      "Opioid_Use_Disorder_and_Pregnancy_CEU.pdf",
      "Pediatric_Food_Allergies_CEU.pdf",
      "Pet_Therapy_CEU.pdf",
      "Rhythm_Recognition_CEU.pdf",
      "Stroke_Alert-Neurological_Emergency_CEU.pdf",
      "Stroke_Update_CEU.pdf",
      "Understanding_the_Chest_Xray_CEU.pdf",
      "Workplace_Violence_CEU.pdf"]

    for (let i = 0; i < fileNames.length; i++) {
      assert(await driver.findElement(By.css(".h2")).getText() == "Registered Nurse Renewal Application - Attachments")
      await driver.findElement(By.id("file")).sendKeys("/Users/Peter/Documents/CETracker/Amanda/" + fileNames[i])
      await driver.findElement(By.name("upload")).click()
      // Checking for one file attached.
      let count = 0;
      while ((true)) {
        if (await driver.findElement(By.css("tr:nth-child(" + (i+2).toString() + ") > .dataView:nth-child(1)")).getText() == fileNames[i]) {
          break;
        }
        else if (count > 10) {
          throw new Error("Timed out after uploading");
        }
        else {
          count++;
          await sleep(1000);
        }
      }
      assert(await driver.findElement(By.css("tr:nth-child(" + (i+2).toString() + ") > .dataView:nth-child(1)")).getText() == fileNames[i])
      // assert(await driver.findElement(By.css(".label")).getText() == "Total Size of Attached Files (MB):")
    }
    await driver.findElement(By.name("next")).click()

    // Application Summary
    assert(await driver.findElement(By.css(".h2")).getText() == "Registered Nurse Renewal Application - Application Summary")
    await driver.findElement(By.name("nextstep")).click()

    // Attestation
    assert(await driver.findElement(By.css(".h2")).getText() == "Registered Nurse Renewal Application - Attestation")
    await driver.findElement(By.id("yes")).click()
    await driver.findElement(By.name("next")).click()
    
    // PAYMENT PAGE
    await driver.findElement(By.name("doesNotMatter")).click()
    https://www.breeze.ca.gov/datamart/quickStartMenuCADCA.do
    await driver.get("https://www.breeze.ca.gov/")
    

    // Paying from dashboard
    await driver.findElement(By.id("payment")).click()

    assert(await driver.findElement(By.css(".h2")).getText() == "Online Application Payment")
    // Payment methods: cnt0 = Visa, cnt1 = MasterCard, cnt2 = Discover, cnt3 = MasterCard
    await driver.findElement(By.id("cnt0")).click()
    await driver.findElement(By.name("btn.next")).click()

    // Confirm Payment Details
    assert(await driver.findElement(By.css(".h2")).getText() == "Confirm Payment Details")
    // await driver.findElement(By.xpath('*[@id="contentBox"]/form[1]/table/tbody/tr[9]/td/div/div/input[1]')).click()

    await driver.findElement(By.xpath('//*[@id="contentBox"]/form[1]/table/tbody/tr[9]/td/div/div/input[1]')).click()
    await driver.findElement(By.id("ssl_account_data")).sendKeys("REDACTED")
    await driver.findElement(By.id("ssl_exp_date")).sendKeys("REDACTED")
    await driver.findElement(By.id("ssl_cvv2cvc2")).sendKeys("REDACTED")
    await driver.findElement(By.id("ssl_first_name")).sendKeys("REDACTED")
    await driver.findElement(By.id("ssl_last_name")).sendKeys("REDACTED")
    await driver.findElement(By.id("ssl_avs_address")).sendKeys("REDACTED")
    await driver.findElement(By.id("ssl_address2")).sendKeys("REDACTED")
    await driver.findElement(By.id("ssl_city")).sendKeys("REDACTED")
    await driver.findElement(By.id("ssl_state")).sendKeys("REDACTED")
    await driver.findElement(By.id("ssl_avs_zip")).sendKeys("REDACTED")

    await driver.findElement(By.id("btnProcess")).click()

    assert(await driver.findElement(By.css(".h2")).getText() == "Online Application Payment Success")

    // Authorization Number
    // assert(await driver.findElement(By.xpath('*[@id="contentBox"]/form/table[1]/tbody/tr[2]/td[2]/span')).getText()
    // Trace Number
    // assert(await driver.findElement(By.xpath('//*[@id="contentBox"]/form/table[1]/tbody/tr[3]/td[2]/span')).getText()

    // Payment PDF Summary Button
    await driver.findElement(By.id("doesNotMatter")).click()
    // Next
    await driver.findElement(By.id("next")).click()
  })
})

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
