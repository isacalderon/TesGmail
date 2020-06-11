Feature: Protractor and cucumber Gmail login
  Scenario: Gmail sign page
    Given I'm on Gmail page
    When Enter data in textbox
    When Enter password
    Then Validate data in URL

  Scenario: I am on gmail now I'll send you an email
     Given navigate to button new
     When Enter the destinatary email and the subject 
    #  When Insert hello world in the body and Send
    #  Then I wait the email in the box

  #  Scenario: I am on gmail now I eliminate the draft
  #    Given navigate to button new
  #    When Enter my data email and subject 
  #    When Insert hello world in the body and erase the draft
  #    Then I hope the message deshacer

 