	function madnessDiv(aMadnessDiv) {
	  aMadnessDiv.costMultiplier = 1.1;
	  aMadnessDiv.costCount = 0;
	  aMadnessDiv.timesClicked = 0;
	  return aMadnessDiv;
	}

function generateMadnessDivs() {

  unlockableMadnessDivs = {};
  
    	  // --------------------- ACHIEVEMENT BASED UPGRADES ----------------------------
	  
	  // --------------------- MONEY ACHIEVEMENTS ------------------------------------
	  
	  unlockableMadnessDivs['upgradeMoneyInterestFour'] = 
	    (madnessDiv({
          id: 'upgradeMoneyInterestFour',
		  boughtdivid: 'boughtUpgradeMoneyInterestFour',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Platinum Account",
		  text: "You've proven your worth and qualify for a platinum account which will earn 5% interest.",
		  stats: "You earn 5% interest on your on hand money every hour",
		  costid: 'upgradeMoneyInterestFourCost',
		  click: function () {
			currMoney -= this.costs[0].current;
		    this.timesClicked++;
		    this.costCount++;
		    totalUpgrades++;
		    moneyDailyInterest = .05;
			moneyBankAccountKey = "upgradeMoneyInterestFour";
			visibleMadnessDivs[this.id].type = "boughtupgrade";
			document.getElementById(this.id).hidden = true;		
			document.getElementById(this.boughtdivid).hidden = false;
		  },
		  costs: [(madnessCost({type: "money", base: 500, current: 500}))],
		  minionCosts: [],
		  unlock: function () {
		  // half the cost, one money Four building, bought previous interest.
		    if (currMoney >= 50000 && madnessMinions['moneyBuildingsFour'].allTime > 0 
			&& typeof(visibleMadnessDivs['upgradeMoneyInterestThree']) == "object" && visibleMadnessDivs['upgradeMoneyInterestThree'].type == "boughtupgrade")
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyInterestThree'] = 
	    (madnessDiv({
          id: 'upgradeMoneyInterestThree',
		  boughtdivid: 'boughtUpgradeMoneyInterestThree',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Gold Account",
		  text: "You have enough money to open a gold account which will earn 3% interest.",
		  stats: "You earn 3% interest on your on hand money every hour",
		  costid: 'upgradeMoneyInterestThreeCost',
		  click: function () {
			currMoney -= this.costs[0].current;
		    this.timesClicked++;
		    this.costCount++;
		    totalUpgrades++;
		    moneyDailyInterest = .03;
			moneyBankAccountKey = "upgradeMoneyInterestThree";
			visibleMadnessDivs[this.id].type = "boughtupgrade";
			document.getElementById(this.id).hidden = true;		
			document.getElementById(this.boughtdivid).hidden = false;
		  },
		  costs: [(madnessCost({type: "money", base: 100, current: 100}))],
		  minionCosts: [],
		  unlock: function () {
		  // half the cost, one money Three building, bought previous interest.
		    if (currMoney >= 5000 && madnessMinions['moneyBuildingsThree'].allTime > 0 
			&& typeof(visibleMadnessDivs['upgradeMoneyInterestTwo']) == "object" && visibleMadnessDivs['upgradeMoneyInterestTwo'].type == "boughtupgrade")
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyInterestTwo'] = 
	    (madnessDiv({
          id: 'upgradeMoneyInterestTwo',
		  boughtdivid: 'boughtUpgradeMoneyInterestTwo',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Silver Account",
		  text: "You can now upgrade to a silver account earning 2% interest.",
		  stats: "You earn 2% interest on your on hand money every hour",
		  costid: 'upgradeMoneyInterestTwoCost',
		  click: function () {
			currMoney -= this.costs[0].current;
		    this.timesClicked++;
		    this.costCount++;
		    totalUpgrades++;
		    moneyDailyInterest = .02;
			moneyBankAccountKey = "upgradeMoneyInterestTwo";
			visibleMadnessDivs[this.id].type = "boughtupgrade";
			document.getElementById(this.id).hidden = true;		
			document.getElementById(this.boughtdivid).hidden = false;
		  },
		  costs: [(madnessCost({type: "money", base: 50, current: 50}))],
		  minionCosts: [],
		  unlock: function () {
		  // high cost, one money two building, bought previous interest.
		    if (currMoney >= 500 && madnessMinions['moneyBuildingsTwo'].allTime > 0
			&& typeof(visibleMadnessDivs['upgradeMoneyInterestOne']) == "object" && visibleMadnessDivs['upgradeMoneyInterestOne'].type == "boughtupgrade")
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyInterestOne'] = 
	    (madnessDiv({
          id: 'upgradeMoneyInterestOne',
		  boughtdivid: 'boughtUpgradeMoneyInterestOne',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Basic Account",
		  text: "You can open a basic checking account earning you 1% interest.",
		  stats: "You earn 1% interest on your on hand money every hour",
		  costid: 'upgradeMoneyInterestOneCost',
		  click: function () {
			currMoney -= this.costs[0].current;
		    this.timesClicked++;
		    this.costCount++;
		    totalUpgrades++;
		    moneyDailyInterest = .01;
			moneyBankAccountKey = "upgradeMoneyInterestOne";
			visibleMadnessDivs[this.id].type = "boughtupgrade";
			document.getElementById(this.id).hidden = true;		
			document.getElementById(this.boughtdivid).hidden = false;
		  },
		  costs: [(madnessCost({type: "money", base: 10, current: 10}))],
		  minionCosts: [],
		  unlock: function () {
		    if (currMoney >= 50 && madnessMinions['moneyBuildingsOne'].allTime > 0)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyClicksTwo'] = 
	    (madnessDiv({
          id: 'upgradeMoneyClicksTwo',
		  boughtdivid: 'boughtUpgradeMoneyClicksTwo',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Stock Portfolio",
		  text: "Setting up a portfolio of stocks will let you earn more money from clicks.",
		  stats: "Doubles your money per click",
		  costid: 'upgradeMoneyClicksTwoCost',
		  click: function () {
			currMoney -= this.costs[0].current;
		    this.timesClicked++;
		    this.costCount++;
		    totalUpgrades++;
		    moneyPerClick *= 2;
			visibleMadnessDivs[this.id].type = "boughtupgrade";
			document.getElementById(this.id).hidden = true;		
			document.getElementById(this.boughtdivid).hidden = false;
		  },
		  costs: [(madnessCost({type: "money", base: 100, current: 100}))],
		  minionCosts: [],
		  unlock: function () {
		    // 250 clicks or 1000 money from clicks so on ascension they could conceivably get this sooner
			// double the money from clicks since its the second upgrade
		    if (totalMoneyClicks >= 250 || totalMoneyFromClicking >= 1000)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyClicksOne'] = 
	    (madnessDiv({
          id: 'upgradeMoneyClicksOne',
		  boughtdivid: 'boughtUpgradeMoneyClicksOne',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Mutual Funds",
		  text: "You can now invest in mutual funds allowing you to get more money from clicks.",
		  stats: "Doubles your money per click",
		  costid: 'upgradeMoneyClicksOneCost',
		  click: function () {
		    currMoney -= this.costs[0].current;
		    this.timesClicked++;
		    this.costCount++;
		    totalUpgrades++;
		    moneyPerClick *= 2;
			visibleMadnessDivs[this.id].type = "boughtupgrade";
			document.getElementById(this.id).hidden = true;		
			document.getElementById(this.boughtdivid).hidden = false;
		  },
		  costs: [(madnessCost({type: "money", base: 50, current: 50}))],
		  minionCosts: [],
		  unlock: function () {
		    // 50 clicks or 100 money from clicks so on ascension they could conceivably get this sooner
		    if (totalMoneyClicks >= 50 || totalMoneyFromClicking >= 100)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyClicksFromBuildingsFour'] = 
	    (madnessDiv({
          id: 'upgradeMoneyClicksFromBuildingsFour',
		  boughtdivid: 'boughtUpgradeMoneyClicksFromBuildingsFour',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Exclusive Deals",
		  text: "Adding deals between your stores exclusive to each other will further increase the money you make " +
		  "from clicks for each building you have.",
		  stats: "More money from clicks for each building you have",
		  costid: 'upgradeMoneyClicksFromBuildingsFourCost',
		  click: function () {
			currMoney -= this.costs[0].current;
		    this.timesClicked++;
		    this.costCount++;
		    totalUpgrades++;
		    moneyPerBuildingClickMult += 1;
			visibleMadnessDivs[this.id].type = "boughtupgrade";
			document.getElementById(this.id).hidden = true;		
			document.getElementById(this.boughtdivid).hidden = false;
		  },
		  costs: [(madnessCost({type: "money", base: 2500, current: 2500}))],
		  minionCosts: [],
		  unlock: function () {
		    if (totalMoneyBuildingsConverted >= 500 && madnessMinions['moneyBuildingsFour'].current >= 1)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyClicksFromBuildingsThree'] = 
	    (madnessDiv({
          id: 'upgradeMoneyClicksFromBuildingsThree',
		  boughtdivid: 'boughtUpgradeMoneyClicksFromBuildingsThree',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Cross Promotion",
		  text: "Your businesses can start to advertise for each other increasing your money per click further for " +
		  "each business.",
		  stats: "More money from clicks for each building you have",
		  costid: 'upgradeMoneyClicksFromBuildingsThreeCost',
		  click: function () {
			currMoney -= this.costs[0].current;
		    this.timesClicked++;
		    this.costCount++;
		    totalUpgrades++;
		    moneyPerBuildingClickMult += 0.5;
			visibleMadnessDivs[this.id].type = "boughtupgrade";
			document.getElementById(this.id).hidden = true;		
			document.getElementById(this.boughtdivid).hidden = false;
		  },
		  costs: [(madnessCost({type: "money", base: 1000, current: 1000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (totalMoneyBuildingsConverted >= 250 && madnessMinions['moneyBuildingsThree'].current >= 1)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyClicksFromBuildingsTwo'] = 
	    (madnessDiv({
          id: 'upgradeMoneyClicksFromBuildingsTwo',
		  boughtdivid: 'boughtUpgradeMoneyClicksFromBuildingsTwo',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade", 
		  title: "Targeted Promotion",
		  text: "You have so many businesses you can start to target your audience better, giving even more " +
		  "money for each building per click.",
		  stats: "More money from clicks for each building you have",
		  costid: 'upgradeMoneyClicksFromBuildingsTwoCost',
		  click: function () {
			currMoney -= this.costs[0].current;
		    this.timesClicked++;
		    this.costCount++;
		    totalUpgrades++;
		    moneyPerBuildingClickMult += 0.2;
			visibleMadnessDivs[this.id].type = "boughtupgrade";
			document.getElementById(this.id).hidden = true;		
			document.getElementById(this.boughtdivid).hidden = false;
		  },
		  costs: [(madnessCost({type: "money", base: 500, current: 500}))],
		  minionCosts: [],
		  unlock: function () {
		    if (totalMoneyBuildingsConverted >= 100 && madnessMinions['moneyBuildingsTwo'].current >= 1)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyClicksFromBuildingsOne'] = 
	    (madnessDiv({
          id: 'upgradeMoneyClicksFromBuildingsOne',
		  boughtdivid: 'boughtUpgradeMoneyClicksFromBuildingsOne',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Promotion",
		  text: "You have so many businesses that you can start to promote them. You'll get extra money from " +
		  "clicks for each building.",
		  stats: "More money from clicks for each building you have",
		  costid: 'upgradeMoneyClicksFromBuildingsOneCost',
		  click: function () {
			currMoney -= this.costs[0].current;
		    this.timesClicked++;
		    this.costCount++;
		    totalUpgrades++;
		    moneyPerBuildingClickMult += 0.1;
			visibleMadnessDivs[this.id].type = "boughtupgrade";
			document.getElementById(this.id).hidden = true;		
			document.getElementById(this.boughtdivid).hidden = false;
		  },
		  costs: [(madnessCost({type: "money", base: 250, current: 250}))],
		  minionCosts: [],
		  unlock: function () {
		    // 25 total money buildings converted
		    if (totalMoneyBuildingsConverted >= 25 && madnessMinions['moneyBuildingsOne'].current >= 1)
			  return true;
			else
			  return false;
		  }
        }));
  
    // --------------------- MADNESS ACHIEVEMENTS ----------------------------------
	  
	  unlockableMadnessDivs['upgradeMadnessClicksTwo'] = 
	    (madnessDiv({
          id: 'upgradeMadnessClicksTwo',
		  boughtdivid: 'boughtUpgradeMadnessClicksTwo',
		  tab: "madnessMadnessTab",
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Unrelenting Slumber",
		  text: "Cthulhu continues to slumber, even more madness from clicks.",
		  stats: "Doubles your madness per click",
		  costid: 'upgradeMadnessClicksTwoCost',
		  click: function () {
			currMadness -= this.costs[0].current;
		    this.timesClicked++;
		    this.costCount++;
		    totalUpgrades++;
		    madnessPerClick *= 2;
			visibleMadnessDivs[this.id].type = "boughtupgrade";
			document.getElementById(this.id).hidden = true;		
			document.getElementById(this.boughtdivid).hidden = false;
		  },
		  costs: [(madnessCost({type: "madness", base: 100, current: 100}))],
		  minionCosts: [],
		  unlock: function () {
		    // 250 clicks or 1000 madness from clicks so on ascension they could conceivably get this sooner
			// double the madness from clicks since its the second upgrade
		    if (totalMadnessClicks >= 250 || totalMadnessFromClicking >= 1000)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMadnessClicksOne'] = 
	    (madnessDiv({
          id: 'upgradeMadnessClicksOne',
		  boughtdivid: 'boughtUpgradeMadnessClicksOne',
		  tab: "madnessMadnessTab",
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",

		  title: "Deep Slumber",
		  text: "Cthulhu's slumber is deeper than ever, granting you more madness from clicks.",
		  stats: "Doubles your madness per click",
		  costid: 'upgradeMadnessClicksOneCost',
		  click: function () {
		    currMadness -= this.costs[0].current;
		    this.timesClicked++;
		    this.costCount++;
		    totalUpgrades++;
		    madnessPerClick *= 2;
			visibleMadnessDivs[this.id].type = "boughtupgrade";
			document.getElementById(this.id).hidden = true;		
			document.getElementById(this.boughtdivid).hidden = false;
		  },
		  costs: [(madnessCost({type: "madness", base: 50, current: 50}))],
		  minionCosts: [],
		  unlock: function () {
		    // 50 clicks or 100 madness from clicks so on ascension they could conceivably get this sooner
		    if (totalMadnessClicks >= 50 || totalMadnessFromClicking >= 100)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMadnessClicksFromBuildingsFour'] = 
	    (madnessDiv({
          id: 'upgradeMadnessClicksFromBuildingsFour',
		  boughtdivid: 'boughtUpgradeMadnessClicksFromBuildingsFour',
		  tab: "madnessMadnessTab",
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Religion of Cthulhu",
		  text: "Your church has enough members its officially recognized as a religion. Cthulhu will produce more " +
		    "madness when clicked for each minion.",
		  stats: "More madness from clicks for each minion you have",
		  costid: 'upgradeMadnessClicksFromBuildingsFourCost',
		  click: function () {
			currMadness -= this.costs[0].current;
		    this.timesClicked++;
		    this.costCount++;
		    totalUpgrades++;
		    madnessPerBuildingClickMult += 1;
			visibleMadnessDivs[this.id].type = "boughtupgrade";
			document.getElementById(this.id).hidden = true;		
			document.getElementById(this.boughtdivid).hidden = false;
		  },
		  costs: [(madnessCost({type: "madness", base: 2500, current: 2500}))],
		  minionCosts: [],
		  unlock: function () {
		    if (totalMinionsConverted >= 500 && madnessMinions['madnessMinionsFour'].current >= 1)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMadnessClicksFromBuildingsThree'] = 
	    (madnessDiv({
          id: 'upgradeMadnessClicksFromBuildingsThree',
		  boughtdivid: 'boughtUpgradeMadnessClicksFromBuildingsThree',
		  tab: "madnessMadnessTab",
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Church of Cthulhu",
		  text: "Your minions form an official church for their dark worship. Cthulhu will produce more madness when " +
		    "clicked for each minion.",
		  stats: "More madness from clicks for each minion you have",
		  costid: 'upgradeMadnessClicksFromBuildingsThreeCost',
		  click: function () {
			currMadness -= this.costs[0].current;
		    this.timesClicked++;
		    this.costCount++;
		    totalUpgrades++;
		    madnessPerBuildingClickMult += 0.5;
			visibleMadnessDivs[this.id].type = "boughtupgrade";
			document.getElementById(this.id).hidden = true;		
			document.getElementById(this.boughtdivid).hidden = false;
		  },
		  costs: [(madnessCost({type: "madness", base: 1000, current: 1000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (totalMinionsConverted >= 250 && madnessMinions['madnessMinionsThree'].current >= 1)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMadnessClicksFromBuildingsTwo'] = 
	    (madnessDiv({
          id: 'upgradeMadnessClicksFromBuildingsTwo',
		  boughtdivid: 'boughtUpgradeMadnessClicksFromBuildingsTwo',
		  tab: "madnessMadnessTab",
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Cult of Cthulhu",
		  text: "Your minions begin to organize into a cult. Cthulhu will produce more madness when clicked " +
		  "for each minion.",
		  stats: "More madness from clicks for each minion you have",
		  costid: 'upgradeMadnessClicksFromBuildingsTwoCost',
		  click: function () {
			currMadness -= this.costs[0].current;
		    this.timesClicked++;
		    this.costCount++;
		    totalUpgrades++;
		    madnessPerBuildingClickMult += 0.2;
			visibleMadnessDivs[this.id].type = "boughtupgrade";
			document.getElementById(this.id).hidden = true;		
			document.getElementById(this.boughtdivid).hidden = false;
		  },
		  costs: [(madnessCost({type: "madness", base: 500, current: 500}))],
		  minionCosts: [],
		  unlock: function () {
		    if (totalMinionsConverted >= 100 && madnessMinions['madnessMinionsTwo'].current >= 1)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMadnessClicksFromBuildingsOne'] = 
	    (madnessDiv({
          id: 'upgradeMadnessClicksFromBuildingsOne',
		  boughtdivid: 'boughtUpgradeMadnessClicksFromBuildingsOne',
		  tab: "madnessMadnessTab",
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Secret Gatherings",
		  text: "Your minions begin to meet with each other in secret. Cthulhu will produce more madness when " +
		  "clicked for each minion.",
		  stats: "More madness from clicks for each minion you have",
		  costid: 'upgradeMadnessClicksFromBuildingsOneCost',
		  click: function () {
			currMadness -= this.costs[0].current;
		    this.timesClicked++;
		    this.costCount++;
		    totalUpgrades++;
		    madnessPerBuildingClickMult += 0.1;
			visibleMadnessDivs[this.id].type = "boughtupgrade";
			document.getElementById(this.id).hidden = true;		
			document.getElementById(this.boughtdivid).hidden = false;
		  },
		  costs: [(madnessCost({type: "madness", base: 250, current: 250}))],
		  minionCosts: [],
		  unlock: function () {
		    // 25 total minions converted
		    if (totalMinionsConverted >= 25 && madnessMinions['madnessMinionsOne'].current >= 1)
			  return true;
			else
			  return false;
		  }
        }));
  
    // ------------------- MONEY BUILDINGS 8 ------------------------------
		
		unlockableMadnessDivs['moneyBuildingsEightBuy'] = 
	    (madnessDiv({
          id: 'moneyBuildingsEightBuy',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyBuildingsSubTab",
		  type: "building",
		  title: "Pharmaceutical Company",
		  text: "With madness on the rise, pharmaceutical drugs are in high demand. Yours won't help ease " +
		  "the madness, but will make the user accept it more readily.",
		  statsdiv: "moneyBuildingsEightBuyStats",
		  minion: 'moneyBuildingsEight',
		  costid: 'moneyBuildingsEightBuyCost',
		  click: function () {
		    currMoney -= this.costs[0].current;
			moneySpent += this.costs[0].current;
			this.timesClicked++;
			totalConvertClicks++;
			this.costCount++;
			calculateAndDisplayCost('moneyBuildingsEightBuy');
			madnessMinions['moneyBuildingsEight'].current++;
			madnessMinions['moneyBuildingsEight'].allTime++;
			totalMoneyBuildingsConverted++;
		  },
		  costs: [(madnessCost({type: "money", base: 500000, current: 500000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (currMoney > 500000) 
			  return true;
			else
			  return false;
		  }
        }));
		
		// bonus upgrades
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsEightBonusFive'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsEightBonusFive',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsEightBonusFive',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Major Chain Distribution",
		  text: "Getting your medicines into a major chain improves the reach of your pharmaceutical companies " +
		  "getting their corrupting drugs to more people.",
		  stats: "Pharmaceutical Companies generate twice as much resources",
		  statsdiv: "moneyBuildingsEightBuyStats",
		  costid: 'upgradeMoneyBuildingsEightBonusFiveCost',
		  minion: 'moneyBuildingsEight',
		  click: function() {upgradeDoubleBonus('upgradeMoneyBuildingsEightBonusFive')},
		  costs: [(madnessCost({type: "money", base: 50000000000, current: 50000000000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsEight'].current >= 100)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsEightBonusFour'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsEightBonusFour',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsEightBonusFour',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Designer Drugs",
		  text: "Designer modifications to your pharmaceutical companies drugs allow them to charge more " +
		  "for selling them outside the normal channels.",
		  stats: "Pharmaceutical Companies generate more base resources",
		  statsdiv: "moneyBuildingsEightBuyStats",
		  costid: 'upgradeMoneyBuildingsEightBonusFourCost',
		  minion: 'moneyBuildingsEight',
		  click: function () {upgradeIncreaseBase('upgradeMoneyBuildingsEightBonusFour', 30, 15000, 0, 0);},
		  costs: [(madnessCost({type: "money", base: 50000000, current: 50000000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsEight'].current >= 50)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsEightBonusThree'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsEightBonusThree',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsEightBonusThree',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Psychiatrist Recommended",
		  text: "A few psychiatrists on your payroll means your drugs get prescribed more often. This allows your " +
		  "pharmaceutical companies more profit and spreads more madness.",
		  stats: "Pharmaceutical Companies generate twice as much resources",
		  statsdiv: "moneyBuildingsEightBuyStats",
		  costid: 'upgradeMoneyBuildingsEightBonusThreeCost',
		  minion: 'moneyBuildingsEight',
		  click: function() {upgradeDoubleBonus('upgradeMoneyBuildingsEightBonusThree')},
		  costs: [(madnessCost({type: "money", base: 5000000, current: 5000000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsEight'].current >= 25)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsEightBonusTwo'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsEightBonusTwo',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsEightBonusTwo',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Drug Patent",
		  text: "After patenting new drugs, your pharmaceutical companies can raise the price without " +
		  "competition. This will allow you to sell increasingly unstable drugs for a higher price.",
		  stats: "Pharmaceutical Companies generate more base resources",
		  statsdiv: "moneyBuildingsEightBuyStats",
		  costid: 'upgradeMoneyBuildingsEightBonusTwoCost',
		  minion: 'moneyBuildingsEight',
		  click: function () {upgradeIncreaseBase('upgradeMoneyBuildingsEightBonusTwo', 10, 5000, 0, 0);},
		  costs: [(madnessCost({type: "money", base: 1000000, current: 1000000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsEight'].current >= 10)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsEightBonusOne'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsEightBonusOne',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsEightBonusOne',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Debilitating Side Effects",
		  text: "By building awful side effects into their drugs, your pharmaceutical companies can ensure " +
		  "they can sell other pills to counteract them.",
		  stats: "Pharmaceutical Companies generate twice as much resources",
		  statsdiv: "moneyBuildingsEightBuyStats",
		  costid: 'upgradeMoneyBuildingsEightBonusOneCost',
		  minion: 'moneyBuildingsEight',
		  click: function() {upgradeDoubleBonus('upgradeMoneyBuildingsEightBonusOne')},
		  costs: [(madnessCost({type: "money", base: 500000, current: 500000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsEight'].current >= 5)
			  return true;
			else
			  return false;
		  }
        }));
  
    // ------------------- MONEY BUILDINGS 7 ------------------------------
		
		unlockableMadnessDivs['moneyBuildingsSevenBuy'] = 
	    (madnessDiv({
          id: 'moneyBuildingsSevenBuy',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyBuildingsSubTab",
		  type: "building",
		  title: "Talk Radio Station",
		  text: "Talk Radio is big business whether audiences listen because they earnestly believe or " +
		  "just for entertainment. It spreads distrust, and thereby madness, very effectively.",
		  statsdiv: "moneyBuildingsSevenBuyStats",
		  minion: 'moneyBuildingsSeven',
		  costid: 'moneyBuildingsSevenBuyCost',
		  click: function () {
		    currMoney -= this.costs[0].current;
			moneySpent += this.costs[0].current;
			this.timesClicked++;
			totalConvertClicks++;
			this.costCount++;
			calculateAndDisplayCost('moneyBuildingsSevenBuy');
			madnessMinions['moneyBuildingsSeven'].current++;
			madnessMinions['moneyBuildingsSeven'].allTime++;
			totalMoneyBuildingsConverted++;
		  },
		  costs: [(madnessCost({type: "money", base: 100000, current: 100000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (currMoney > 100000) 
			  return true;
			else
			  return false;
		  }
        }));
		
		// bonus upgrades
		
	  unlockableMadnessDivs['upgradeMoneyBuildingsSevenBonusFive'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsSevenBonusFive',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsSevenBonusFive',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Political Agenda",
		  text: "Aligning with increasingly fringe political activists your talk radio shows move further out "
		  + "of the mainstream and move your listeners opinions as well.",
		  stats: "Talk Radio Stations generate twice as much resources",
		  statsdiv: "moneyBuildingsSevenBuyStats",
		  costid: 'upgradeMoneyBuildingsSevenBonusFiveCost',
		  minion: 'moneyBuildingsSeven',
		  click: function() {upgradeDoubleBonus('upgradeMoneyBuildingsSevenBonusFive')},
		  costs: [(madnessCost({type: "money", base: 1500000000, current: 1500000000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsSeven'].current >= 100)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsSevenBonusFour'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsSevenBonusFour',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsSevenBonusFour',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Satellite Radio",
		  text: "By moving to satellite radio your talk shows earn even more money from subscription fees "
		  + "and spread their corrupting message more effectively.",
		  stats: "Talk Radio Stations generate more base resources",
		  statsdiv: "moneyBuildingsSevenBuyStats",
		  costid: 'upgradeMoneyBuildingsSevenBonusFourCost',
		  minion: 'moneyBuildingsSeven',
		  click: function () {upgradeIncreaseBase('upgradeMoneyBuildingsSevenBonusFour', 5, 3000, 0, 0);},
		  costs: [(madnessCost({type: "money", base: 10000000, current: 10000000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsSeven'].current >= 50)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsSevenBonusThree'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsSevenBonusThree',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsSevenBonusThree',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Subliminal Messages",
		  text: "Adding subliminal messages to the your talk radio shows will subtly corrupt the minds " +
		  "of your listeners and keep bringing them back for more.",
		  stats: "Talk Radio Stations generate twice as much resources",
		  statsdiv: "moneyBuildingsSevenBuyStats",
		  costid: 'upgradeMoneyBuildingsSevenBonusThreeCost',
		  minion: 'moneyBuildingsSeven',
		  click: function() {upgradeDoubleBonus('upgradeMoneyBuildingsSevenBonusThree')},
		  costs: [(madnessCost({type: "money", base: 1000000, current: 1000000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsSeven'].current >= 25)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsSevenBonusTwo'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsSevenBonusTwo',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsSevenBonusTwo',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "FM Band",
		  text: "Moving your talk radio shows to FM radio expands your listenership, allowing you to charge " +
		  "more for advertising.",
		  stats: "Talk Radio Stations generate more base resources",
		  statsdiv: "moneyBuildingsSevenBuyStats",
		  costid: 'upgradeMoneyBuildingsSevenBonusTwoCost',
		  minion: 'moneyBuildingsSeven',
		  click: function () {upgradeIncreaseBase('upgradeMoneyBuildingsSevenBonusTwo', 3, 1000, 0, 0);},
		  costs: [(madnessCost({type: "money", base: 250000, current: 250000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsSeven'].current >= 10)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsSevenBonusOne'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsSevenBonusOne',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsSevenBonusOne',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Aggressive Guests",
		  text: "Having aggressive and argumentative guests on your talk radio shows draws more people to " +
		  "listen and take in the crazy things they say.",
		  stats: "Talk Radio Stations generate twice as much resources",
		  statsdiv: "moneyBuildingsSevenBuyStats",
		  costid: 'upgradeMoneyBuildingsSevenBonusOneCost',
		  minion: 'moneyBuildingsSeven',
		  click: function() {upgradeDoubleBonus('upgradeMoneyBuildingsSevenBonusOne')},
		  costs: [(madnessCost({type: "money", base: 150000, current: 150000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsSeven'].current >= 5)
			  return true;
			else
			  return false;
		  }
        }));
  
    // ------------------- MONEY BUILDINGS 6 ------------------------------
		
		unlockableMadnessDivs['moneyBuildingsSixBuy'] = 
	    (madnessDiv({
          id: 'moneyBuildingsSixBuy',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyBuildingsSubTab",
		  type: "building",
		  title: "Asylum",
		  text: "Asylums are a great way to spread madness while turning a profit. No one improves within " +
		  "these walls, but they get released eventually nonetheless.",
		  statsdiv: "moneyBuildingsSixBuyStats",
		  minion: 'moneyBuildingsSix',
		  costid: 'moneyBuildingsSixBuyCost',
		  click: function () {
		    currMoney -= this.costs[0].current;
			moneySpent += this.costs[0].current;
			this.timesClicked++;
			totalConvertClicks++;
			this.costCount++;
			calculateAndDisplayCost('moneyBuildingsSixBuy');
			madnessMinions['moneyBuildingsSix'].current++;
			madnessMinions['moneyBuildingsSix'].allTime++;
			totalMoneyBuildingsConverted++;
		  },
		  costs: [(madnessCost({type: "money", base: 20000, current: 20000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (currMoney > 20000) 
			  return true;
			else
			  return false;
		  }
        }));
		
		// bonus upgrades
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsSixBonusFive'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsSixBonusFive',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsSixBonusFive',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Organ Harvesting",
		  text: "Harvesting the organs of inmates who die at your asylums allow you to profit twice. Once " +
		  "from their miserable lives and again from their deaths.",
		  stats: "Asylums generate twice as much resources",
		  statsdiv: "moneyBuildingsSixBuyStats",
		  costid: 'upgradeMoneyBuildingsSixBonusFiveCost',
		  minion: 'moneyBuildingsSix',
		  click: function() {upgradeDoubleBonus('upgradeMoneyBuildingsSixBonusFive')},
		  costs: [(madnessCost({type: "money", base: 300000000, current: 300000000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsSix'].current >= 100)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsSixBonusFour'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsSixBonusFour',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsSixBonusFour',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Secure Cells",
		  text: "Adding bars to some of the cells in your asylums will allow you to take in criminally dangerous " +
		  "inmates and charge more for their care.",
		  stats: "Asylums generate more base resources",
		  statsdiv: "moneyBuildingsSixBuyStats",
		  costid: 'upgradeMoneyBuildingsSixBonusFourCost',
		  minion: 'moneyBuildingsSix',
		  click: function () {upgradeIncreaseBase('upgradeMoneyBuildingsSixBonusFour', 1, 500, 0, 0);},
		  costs: [(madnessCost({type: "money", base: 2500000, current: 2500000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsSix'].current >= 50)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsSixBonusThree'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsSixBonusThree',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsSixBonusThree',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Drug Testing",
		  text: "By testing out new drugs on the inmates of your asylums you can earn some extra money. " +
		  "The inmates will deal with the side effects while you reap the benefits.",
		  stats: "Asylums generate twice as much resources",
		  statsdiv: "moneyBuildingsSixBuyStats",
		  costid: 'upgradeMoneyBuildingsSixBonusThreeCost',
		  minion: 'moneyBuildingsSix',
		  click: function() {upgradeDoubleBonus('upgradeMoneyBuildingsSixBonusThree')},
		  costs: [(madnessCost({type: "money", base: 200000, current: 200000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsSix'].current >= 25)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsSixBonusTwo'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsSixBonusTwo',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsSixBonusTwo',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Padded Rooms",
		  text: "Adding padded rooms to your asylums will allow you to take in patients who are a danger to " +
		  "themselves, and this allows you to charge more.",
		  stats: "Asylums generate more base resources",
		  statsdiv: "moneyBuildingsSixBuyStats",
		  costid: 'upgradeMoneyBuildingsSixBonusTwoCost',
		  minion: 'moneyBuildingsSix',
		  click: function () {upgradeIncreaseBase('upgradeMoneyBuildingsSixBonusTwo', .5, 300, 0, 0);},
		  costs: [(madnessCost({type: "money", base: 50000, current: 50000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsSix'].current >= 10)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsSixBonusOne'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsSixBonusOne',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsSixBonusOne',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Experimental Treatments",
		  text: "By using experimental treatments on the inmates in your asylums you can increase your profit " +
		  "while driving the inmates further over the edge.",
		  stats: "Asylums generate twice as much resources",
		  statsdiv: "moneyBuildingsSixBuyStats",
		  costid: 'upgradeMoneyBuildingsSixBonusOneCost',
		  minion: 'moneyBuildingsSix',
		  click: function() {upgradeDoubleBonus('upgradeMoneyBuildingsSixBonusOne')},
		  costs: [(madnessCost({type: "money", base: 25000, current: 25000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsSix'].current >= 5)
			  return true;
			else
			  return false;
		  }
        }));
  
    // ------------------- MONEY BUILDINGS 5 ------------------------------
		
		unlockableMadnessDivs['moneyBuildingsFiveBuy'] = 
	    (madnessDiv({
          id: 'moneyBuildingsFiveBuy',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyBuildingsSubTab",
		  type: "building",
		  title: "Halfway House",
		  text: "There is profit to be made in housing troubled people as they try to turn their lives around. " +
		  "At your halfway houses the experience will also be maddening.",
		  statsdiv: "moneyBuildingsFiveBuyStats",
		  minion: 'moneyBuildingsFive',
		  costid: 'moneyBuildingsFiveBuyCost',
		  click: function () {
		    currMoney -= this.costs[0].current;
			moneySpent += this.costs[0].current;
			this.timesClicked++;
			totalConvertClicks++;
			this.costCount++;
			calculateAndDisplayCost('moneyBuildingsFiveBuy');
			madnessMinions['moneyBuildingsFive'].current++;
			madnessMinions['moneyBuildingsFive'].allTime++;
			totalMoneyBuildingsConverted++;
		  },
		  costs: [(madnessCost({type: "money", base: 5000, current: 5000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (currMoney > 5000) 
			  return true;
			else
			  return false;
		  }
        }));
		
		// bonus upgrades
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsFiveBonusFive'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsFiveBonusFive',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsFiveBonusFive',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Security System",
		  text: "An advanced security system at your halfway houses will ensure your wards can not leave and " +
		  "unnerve them in the process.",
		  stats: "Halfway Houses generate twice as much resources",
		  statsdiv: "moneyBuildingsFiveBuyStats",
		  costid: 'upgradeMoneyBuildingsFiveBonusFiveCost',
		  minion: 'moneyBuildingsFive',
		  click: function() {upgradeDoubleBonus('upgradeMoneyBuildingsFiveBonusFive')},
		  costs: [(madnessCost({type: "money", base: 50000000, current: 50000000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsFive'].current >= 100)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsFiveBonusFour'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsFiveBonusFour',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsFiveBonusFour',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "National Contract",
		  text: "Securing a national contract for your halfway houses will allow you to charge even more and " +
		  "get away with undermining the youth more freely.",
		  stats: "Halfway Houses generate more base resources",
		  statsdiv: "moneyBuildingsFiveBuyStats",
		  costid: 'upgradeMoneyBuildingsFiveBonusFourCost',
		  minion: 'moneyBuildingsFive',
		  click: function () {upgradeIncreaseBase('upgradeMoneyBuildingsFiveBonusFour', .3, 100, 0, 0)},
		  costs: [(madnessCost({type: "money", base: 500000, current: 500000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsFive'].current >= 50)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsFiveBonusThree'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsFiveBonusThree',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsFiveBonusThree',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Bribed Parole Officer",
		  text: "Bribes get parole officers in your pocket. They'll extend the stays at your " +
		  "halfway houses, earning you more money at the cost of your wards mental well being.",
		  stats: "Halfway Houses generate twice as much resources",
		  statsdiv: "moneyBuildingsFiveBuyStats",
		  costid: 'upgradeMoneyBuildingsFiveBonusThreeCost',
		  minion: 'moneyBuildingsFive',
		  click: function() {upgradeDoubleBonus('upgradeMoneyBuildingsFiveBonusThree')},
		  costs: [(madnessCost({type: "money", base: 50000, current: 50000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsFive'].current >= 25)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsFiveBonusTwo'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsFiveBonusTwo',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsFiveBonusTwo',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "State Contract",
		  text: "You make a contract with the state making your halfway houses the official residence for " +
		  "recently released teens, allowing you to charge more.",
		  stats: "Halfway Houses generate more base resources",
		  statsdiv: "moneyBuildingsFiveBuyStats",
		  costid: 'upgradeMoneyBuildingsFiveBonusTwoCost',
		  minion: 'moneyBuildingsFive',
		  click: function () {upgradeIncreaseBase('upgradeMoneyBuildingsFiveBonusTwo', .1, 50, 0, 0);},
		  costs: [(madnessCost({type: "money", base: 15000, current: 15000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsFive'].current >= 10)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsFiveBonusOne'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsFiveBonusOne',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsFiveBonusOne',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Strict Orderlies",
		  text: "Stricter orderlies will keep your wards in line through intimidation. They'll stay at " +
		  "your halfway houses longer and earn you more money.",
		  stats: "Halfway Houses generate twice as much resources",
		  statsdiv: "moneyBuildingsFiveBuyStats",
		  costid: 'upgradeMoneyBuildingsFiveBonusOneCost',
		  minion: 'moneyBuildingsFive',
		  click: function() {upgradeDoubleBonus('upgradeMoneyBuildingsFiveBonusOne')},
		  costs: [(madnessCost({type: "money", base: 10000, current: 10000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsFive'].current >= 5)
			  return true;
			else
			  return false;
		  }
        }));
  
    // ------------------- MONEY BUILDINGS 4 ------------------------------
		
		unlockableMadnessDivs['moneyBuildingsFourBuy'] = 
	    (madnessDiv({
          id: 'moneyBuildingsFourBuy',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyBuildingsSubTab",
		  type: "building",
		  title: "Rock Candy Store",
		  text: "You can open a rock candy store. They will only sell blue and operate exclusively out of " +
		  "basements, but for some reason are extremely popular.",
		  statsdiv: "moneyBuildingsFourBuyStats",
		  minion: 'moneyBuildingsFour',
		  costid: 'moneyBuildingsFourBuyCost',
		  click: function () {
		    currMoney -= this.costs[0].current;
			moneySpent += this.costs[0].current;
			this.timesClicked++;
			totalConvertClicks++;
			this.costCount++;
			calculateAndDisplayCost('moneyBuildingsFourBuy');
			madnessMinions['moneyBuildingsFour'].current++;
			madnessMinions['moneyBuildingsFour'].allTime++;
			totalMoneyBuildingsConverted++;
		  },
		  costs: [(madnessCost({type: "money", base: 1000, current: 1000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (currMoney > 1000) 
			  return true;
			else
			  return false;
		  }
        }));
		
		// bonus upgrades
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsFourBonusFive'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsFourBonusFive',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsFourBonusFive',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Mules",
		  text: "You start using mules to transport your rock candy to and from foreign lands.",
		  stats: "Rock Candy Stores generate twice as much money",
		  statsdiv: "moneyBuildingsFourBuyStats",
		  costid: 'upgradeMoneyBuildingsFourBonusFiveCost',
		  minion: 'moneyBuildingsFour',
		  click: function() {upgradeDoubleBonus('upgradeMoneyBuildingsFourBonusFive')},
		  costs: [(madnessCost({type: "money", base: 15000000, current: 15000000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsFour'].current >= 100)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsFourBonusFour'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsFourBonusFour',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsFourBonusFour',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Platinum Boilers",
		  text: "Boiling in platinum increases the purity of your rock candy even more. Your rock candy " +
		  "is the best, and you can charge a premium for it.",
		  stats: "Rock Candy Stores generate 30 more base money",
		  statsdiv: "moneyBuildingsFourBuyStats",
		  costid: 'upgradeMoneyBuildingsFourBonusFourCost',
		  minion: 'moneyBuildingsFour',
		  click: function () {upgradeIncreaseBase('upgradeMoneyBuildingsFourBonusFour', 0, 30, 0, 0);},
		  costs: [(madnessCost({type: "money", base: 100000, current: 100000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsFour'].current >= 50)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsFourBonusThree'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsFourBonusThree',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsFourBonusThree',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Sleazy Lawyers",
		  text: "You hire lawyers willing to do anything to protect your rock candy business from " +
		  "potential lawsuits. They're so popular they get their own TV show.",
		  stats: "Rock Candy Stores generate twice as much money",
		  statsdiv: "moneyBuildingsFourBuyStats",
		  costid: 'upgradeMoneyBuildingsFourBonusThreeCost',
		  minion: 'moneyBuildingsFour',
		  click: function() {upgradeDoubleBonus('upgradeMoneyBuildingsFourBonusThree')},
		  costs: [(madnessCost({type: "money", base: 10000, current: 10000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsFour'].current >= 25)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsFourBonusTwo'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsFourBonusTwo',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsFourBonusTwo',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Stainless Steel Boilers",
		  text: "Cooking your rock candy in stainless steel improves its purity, which for some reason " +
		  "means you can charge more for it.",
		  stats: "Rock Candy Stores generate 10 more base money",
		  statsdiv: "moneyBuildingsFourBuyStats",
		  costid: 'upgradeMoneyBuildingsFourBonusTwoCost',
		  minion: 'moneyBuildingsFour',
		  click: function () {upgradeIncreaseBase('upgradeMoneyBuildingsFourBonusTwo', 0, 10, 0, 0);},
		  costs: [(madnessCost({type: "money", base: 2500, current: 2500}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsFour'].current >= 10)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsFourBonusOne'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsFourBonusOne',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsFourBonusOne',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Free Candy Van",
		  text: "A not at all creepy van that gives out free samples of your rock candy. Once they try it, " +
		  "people are hooked.",
		  stats: "Rock Candy Stores generate twice as much money",
		  statsdiv: "moneyBuildingsFourBuyStats",
		  costid: 'upgradeMoneyBuildingsFourBonusOneCost',
		  minion: 'moneyBuildingsFour',
		  click: function() {upgradeDoubleBonus('upgradeMoneyBuildingsFourBonusOne')},
		  costs: [(madnessCost({type: "money", base: 1500, current: 1500}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsFour'].current >= 5)
			  return true;
			else
			  return false;
		  }
        }));
  
    // ------------------- MONEY BUILDINGS 3 ------------------------------
		
		unlockableMadnessDivs['moneyBuildingsThreeBuy'] = 
	    (madnessDiv({
          id: 'moneyBuildingsThreeBuy',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyBuildingsSubTab",
		  type: "building",
		  title: "Candy Store",
		  text: "You can now buy a retro shop filled with all kinds of candies. The classic decor will " +
		  "really bring the customers in.",
		  statsdiv: "moneyBuildingsThreeBuyStats",
		  minion: 'moneyBuildingsThree',
		  costid: 'moneyBuildingsThreeBuyCost',
		  click: function () {
		    currMoney -= this.costs[0].current;
			moneySpent += this.costs[0].current;
			this.timesClicked++;
			totalConvertClicks++;
			this.costCount++;
			calculateAndDisplayCost('moneyBuildingsThreeBuy');
			madnessMinions['moneyBuildingsThree'].current++;
			madnessMinions['moneyBuildingsThree'].allTime++;
			totalMoneyBuildingsConverted++;
		  },
		  costs: [(madnessCost({type: "money", base: 250, current: 250}))],
		  minionCosts: [],
		  unlock: function () {
		    if (currMoney > 250) 
			  return true;
			else
			  return false;
		  }
        }));
		
		// bonus upgrades
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsThreeBonusFive'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsThreeBonusFive',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsThreeBonusFive',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Witch",
		  text: "You hire a witch and get her to cast a spell that doubles your candy production.",
		  stats: "Candy Stores generate twice as much money",
		  statsdiv: "moneyBuildingsThreeBuyStats",
		  costid: 'upgradeMoneyBuildingsThreeBonusFiveCost',
		  minion: 'moneyBuildingsThree',
		  click: function() {upgradeDoubleBonus('upgradeMoneyBuildingsThreeBonusFive')},
		  costs: [(madnessCost({type: "money", base: 5000000, current: 5000000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsThree'].current >= 100)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsThreeBonusFour'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsThreeBonusFour',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsThreeBonusFour',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Chocolate Bars",
		  text: "Rumoured to have magical powers, your chocolate bars are quite the draw and fetch a hefty price " +
		  "at your candy stores.",
		  stats: "Candy Stores generate 5 more base money",
		  statsdiv: "moneyBuildingsThreeBuyStats",
		  costid: 'upgradeMoneyBuildingsThreeBonusFourCost',
		  minion: 'moneyBuildingsThree',
		  click: function () {upgradeIncreaseBase('upgradeMoneyBuildingsThreeBonusFour', 0, 5, 0, 0);},
		  costs: [(madnessCost({type: "money", base: 25000, current: 25000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsThree'].current >= 50)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsThreeBonusThree'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsThreeBonusThree',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsThreeBonusThree',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Frog Mascot",
		  text: "You brand your candy stores with an adorable frog mascot who is constantly asking questions. " +
		  "It proves very popular with the kids.",
		  stats: "Candy Stores generate twice as much money",
		  statsdiv: "moneyBuildingsThreeBuyStats",
		  costid: 'upgradeMoneyBuildingsThreeBonusThreeCost',
		  minion: 'moneyBuildingsThree',
		  click: function() {upgradeDoubleBonus('upgradeMoneyBuildingsThreeBonusThree')},
		  costs: [(madnessCost({type: "money", base: 2500, current: 2500}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsThree'].current >= 25)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsThreeBonusTwo'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsThreeBonusTwo',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsThreeBonusTwo',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Lollipops",
		  text: "You can start carrying lollipops in your candy stores, and they are worth a lot more.",
		  stats: "Candy Stores generate 3 more base money",
		  statsdiv: "moneyBuildingsThreeBuyStats",
		  costid: 'upgradeMoneyBuildingsThreeBonusTwoCost',
		  minion: 'moneyBuildingsThree',
		  click: function () {upgradeIncreaseBase('upgradeMoneyBuildingsThreeBonusTwo', 0, 3, 0, 0);},
		  costs: [(madnessCost({type: "money", base: 1000, current: 1000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsThree'].current >= 10)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsThreeBonusOne'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsThreeBonusOne',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsThreeBonusOne',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Arcade Cabinet",
		  text: "Installing an arcade cabinet in your stores gives the customers something to do while " +
		  "they wait for you to produce enough candies.",
		  stats: "Candy Stores generate twice as much money",
		  statsdiv: "moneyBuildingsThreeBuyStats",
		  costid: 'upgradeMoneyBuildingsThreeBonusOneCost',
		  minion: 'moneyBuildingsThree',
		  click: function() {upgradeDoubleBonus('upgradeMoneyBuildingsThreeBonusOne')},
		  costs: [(madnessCost({type: "money", base: 500, current: 500}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsThree'].current >= 5)
			  return true;
			else
			  return false;
		  }
        }));
  
    // ------------------- MONEY BUILDINGS 2 ------------------------------
		
		unlockableMadnessDivs['moneyBuildingsTwoBuy'] = 
	    (madnessDiv({
          id: 'moneyBuildingsTwoBuy',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyBuildingsSubTab",
		  type: "building",
		  title: "Cookie Store",
		  text: "You can now open cookie stores with the best cookies you've ever tasted. " +
		  "You just can't wait to get a few more.",
		  statsdiv: "moneyBuildingsTwoBuyStats",
		  minion: 'moneyBuildingsTwo',
		  costid: 'moneyBuildingsTwoBuyCost',
		  click: function () {
		    currMoney -= this.costs[0].current;
			moneySpent += this.costs[0].current;
			this.timesClicked++;
			totalConvertClicks++;
			this.costCount++;
			calculateAndDisplayCost('moneyBuildingsTwoBuy');
			madnessMinions['moneyBuildingsTwo'].current++;
			madnessMinions['moneyBuildingsTwo'].allTime++;
			totalMoneyBuildingsConverted++;
		  },
		  costs: [(madnessCost({type: "money", base: 50, current: 50}))],
		  minionCosts: [],
		  unlock: function () {
		    if (currMoney > 50) 
			  return true;
			else
			  return false;
		  }
        }));
		
		// bonus upgrades
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsTwoBonusFive'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsTwoBonusFive',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsTwoBonusFive',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Shipment",
		  text: "You start receiving shipments from far away. You don't question too much where they come from " +
		  "because the extra cookies make you more money.",
		  stats: "Cookie Stores generate twice as much money",
		  statsdiv: "moneyBuildingsTwoBuyStats",
		  costid: 'upgradeMoneyBuildingsTwoBonusFiveCost',
		  minion: 'moneyBuildingsTwo',
		  click: function() {upgradeDoubleBonus('upgradeMoneyBuildingsTwoBonusFive')},
		  costs: [(madnessCost({type: "money", base: 500000, current: 500000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsTwo'].current >= 100)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsTwoBonusFour'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsTwoBonusFour',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsTwoBonusFour',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Christmas Cookies",
		  text: "Your Christmas themed cookies are the talk of the town. You can now charge a lot more for " +
		  "them and your other cookies as well.",
		  stats: "Cookie Stores generate 1 more base money",
		  statsdiv: "moneyBuildingsTwoBuyStats",
		  costid: 'upgradeMoneyBuildingsTwoBonusFourCost',
		  minion: 'moneyBuildingsTwo',
		  click: function () {upgradeIncreaseBase('upgradeMoneyBuildingsTwoBonusFour', 0, 1, 0, 0);},
		  costs: [(madnessCost({type: "money", base: 5000, current: 5000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsTwo'].current >= 50)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsTwoBonusThree'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsTwoBonusThree',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsTwoBonusThree',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Factories",
		  text: "Industrialization of the cookie making process will allow you to bake way more cookies.",
		  stats: "Cookie Stores generate twice as much money",
		  statsdiv: "moneyBuildingsTwoBuyStats",
		  costid: 'upgradeMoneyBuildingsTwoBonusThreeCost',
		  minion: 'moneyBuildingsTwo',
		  click: function() {upgradeDoubleBonus('upgradeMoneyBuildingsTwoBonusThree')},
		  costs: [(madnessCost({type: "money", base: 500, current: 500}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsTwo'].current >= 25)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsTwoBonusTwo'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsTwoBonusTwo',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsTwoBonusTwo',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Halloween Cookies",
		  text: "Unique Halloween themed shapes and flavors allow you to charge more for cookies.",
		  stats: "Cookie Stores generate .5 more base money",
		  statsdiv: "moneyBuildingsTwoBuyStats",
		  costid: 'upgradeMoneyBuildingsTwoBonusTwoCost',
		  minion: 'moneyBuildingsTwo',
		  click: function () {upgradeIncreaseBase('upgradeMoneyBuildingsTwoBonusTwo', 0, .5, 0, 0);},
		  costs: [(madnessCost({type: "money", base: 150, current: 150}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsTwo'].current >= 10)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsTwoBonusOne'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsTwoBonusOne',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsTwoBonusOne',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Grandmas",
		  text: "Hiring grandmas will allow you to bake more cookies, and her secret recipe is to die for.",
		  stats: "Cookie Stores generate twice as much money",
		  statsdiv: "moneyBuildingsTwoBuyStats",
		  costid: 'upgradeMoneyBuildingsTwoBonusOneCost',
		  minion: 'moneyBuildingsTwo',
		  click: function() {upgradeDoubleBonus('upgradeMoneyBuildingsTwoBonusOne')},
		  costs: [(madnessCost({type: "money", base: 100, current: 100}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsTwo'].current >= 5)
			  return true;
			else
			  return false;
		  }
        }));
  
    // ------------------- MONEY BUILDINGS 1 ------------------------------
		
		unlockableMadnessDivs['moneyBuildingsOneBuy'] = 
	    (madnessDiv({
          id: 'moneyBuildingsOneBuy',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyBuildingsSubTab",
		  type: "building",
		  title: "Lemonade Stand",
		  text: "The lemonade stand is the starting point for every child's economic endeavours.",
		  statsdiv: "moneyBuildingsOneBuyStats",
		  minion: 'moneyBuildingsOne',
		  costid: 'moneyBuildingsOneBuyCost',
		  click: function () {
		    currMoney -= this.costs[0].current;
			moneySpent += this.costs[0].current;
			this.timesClicked++;
			totalConvertClicks++;
			this.costCount++;
			calculateAndDisplayCost('moneyBuildingsOneBuy');
			madnessMinions['moneyBuildingsOne'].current++;
			madnessMinions['moneyBuildingsOne'].allTime++;
			totalMoneyBuildingsConverted++;
		  },
		  costs: [(madnessCost({type: "money", base: 10, current: 10}))],
		  minionCosts: [],
		  unlock: function () {
		    if (currMoney > 10) 
			  return true;
			else
			  return false;
		  }
        }));
		
		// bonus upgrades
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsOneBonusFive'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsOneBonusFive',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsOneBonusFive',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Weather Channel",
		  text: "You can begin to use advanced information from to weather channel to maximize profit each day, " +
		  "preparing more lemonade on hot days and making more money.",
		  stats: "Lemonade Stands generate twice as much money",
		  statsdiv: "moneyBuildingsOneBuyStats",
		  costid: 'upgradeMoneyBuildingsOneBonusFiveCost',
		  minion: 'moneyBuildingsOne',
		  click: function() {upgradeDoubleBonus('upgradeMoneyBuildingsOneBonusFive')},
		  costs: [(madnessCost({type: "money", base: 150000, current: 150000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsOne'].current >= 100)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsOneBonusFour'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsOneBonusFour',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsOneBonusFour',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Organic Lemons",
		  text: "You found a supplier for organic lemons, allowing you to charge significantly more for each " +
		  "cup of lemonade you sell.",
		  stats: "Lemonade Stands generate .3 more base money",
		  statsdiv: "moneyBuildingsOneBuyStats",
		  costid: 'upgradeMoneyBuildingsOneBonusFourCost',
		  minion: 'moneyBuildingsOne',
		  click: function () {upgradeIncreaseBase('upgradeMoneyBuildingsOneBonusFour', 0, .3, 0, 0);},
		  costs: [(madnessCost({type: "money", base: 1000, current: 1000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsOne'].current >= 50)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsOneBonusThree'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsOneBonusThree',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsOneBonusThree',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Pushy Children",
		  text: "The children at your lemonade stand will get pushier, seeking out customers and bringing " +
		  "them back to the stand.",
		  stats: "Lemonade Stands generate twice as much money",
		  statsdiv: "moneyBuildingsOneBuyStats",
		  costid: 'upgradeMoneyBuildingsOneBonusThreeCost',
		  minion: 'moneyBuildingsOne',
		  click: function() {upgradeDoubleBonus('upgradeMoneyBuildingsOneBonusThree')},
		  costs: [(madnessCost({type: "money", base: 100, current: 100}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsOne'].current >= 25)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsOneBonusTwo'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsOneBonusTwo',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsOneBonusTwo',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Mint Leaves",
		  text: "Adding mint to your lemonade will add an exotic flavor allowing you to charge more.",
		  stats: "Lemonade Stands generate .1 more base money",
		  statsdiv: "moneyBuildingsOneBuyStats",
		  costid: 'upgradeMoneyBuildingsOneBonusTwoCost',
		  minion: 'moneyBuildingsOne',
		  click: function () {upgradeIncreaseBase('upgradeMoneyBuildingsOneBonusTwo', 0, .1, 0, 0);},
		  costs: [(madnessCost({type: "money", base: 30, current: 30}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsOne'].current >= 10)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMoneyBuildingsOneBonusOne'] = 
	    (madnessDiv({
          id: 'upgradeMoneyBuildingsOneBonusOne',
		  boughtdivid: 'boughtUpgradeMoneyBuildingsOneBonusOne',
		  tab: "madnessMoneyTab",
		  subtab: "madnessMoneyUpgradesSubTab",
		  type: "upgrade",
		  title: "Better Signs",
		  text: "Clearer signs with large pretty letters will draw more customers to your lemonade stands.",
		  stats: "Lemonade Stands generate twice as much money",
		  statsdiv: "moneyBuildingsOneBuyStats",
		  costid: 'upgradeMoneyBuildingsOneBonusOneCost',
		  minion: 'moneyBuildingsOne',
		  click: function() {upgradeDoubleBonus('upgradeMoneyBuildingsOneBonusOne')},
		  costs: [(madnessCost({type: "money", base: 20, current: 20}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['moneyBuildingsOne'].current >= 5)
			  return true;
			else
			  return false;
		  }
        }));
  
	// ------------------- MADNESS MINIONS 8 ------------------------------
		
		unlockableMadnessDivs['madnessMinionsEightConvert'] = 
	    (madnessDiv({
          id: 'madnessMinionsEightConvert',
		  tab: "madnessMadnessTab",
		  subtab: "madnessMadnessBuildingsSubTab",
		  type: "building",
		  title: "Greedy CEO",
		  text: "The thirst for power is well known to those at the top of the fortune food chain. With Azathoth's " +
		    "influence CEOs' means will feel justified and their ends will be horrifying.",
		  statsdiv: "madnessMinionsEightConvertStats",
		  minion: "madnessMinionsEight",
		  costid: 'madnessMinionsEightConvertCost',
		  click: function () {
		    currMadness -= this.costs[0].current;
			madnessSpent += this.costs[0].current;
			this.timesClicked++;
			totalConvertClicks++;
			this.costCount++;
			calculateAndDisplayCost('madnessMinionsEightConvert');
			madnessMinions['madnessMinionsEight'].current++;
			madnessMinions['madnessMinionsEight'].allTime++;
			totalMinionsConverted++;
		  },
		  costs: [(madnessCost({type: "madness", base: 500000, current: 500000}))],
		  minionCosts: [],
		  unlock: function () {
		    return false;
		  }
        }));
		
		// unlock
		
	  unlockableMadnessDivs['upgradeMadnessUnlockMinionsNine'] = 
	    (madnessDiv({
          id: 'upgradeMadnessUnlockMinionsNine',
		  boughtdivid: 'boughtUpgradeMadnessUnlockMinionsNine',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Placeholder",
		  text: "This is placeholder text",
		  stats: "Unlocks a new minion",
		  costid: 'upgradeMadnessUnlockMinionsNineCost',
		  click: function () {
		    currMadness -= this.costs[0].current;
			madnessMinions['madnessMinionsEight'].current -= this.minionCosts[0].current;
		    this.timesClicked++;
		    this.costCount++;
		    totalUpgrades++;

			//var key = 'madnessMinionsNineConvert';
			//visibleMadnessDivs[key] = madnessDiv(unlockableMadnessDivs[key]);
		    //delete unlockableMadnessDivs[key];
		    //document.getElementById(key).hidden = false;
			//calculateAndDisplayCost(visibleMadnessDivs[key].id);
			//displayAndLogMessage("You unlocked " + visibleMadnessDivs[key].title, visibleMadnessDivs[key].text);
			//addNotifyTab('madnessMadnessTab');
			//addNotifySubTab('madnessMadnessBuildingsSubTab');
			
			updateMadWorldDiv("This is placeholder text");
			
			visibleMadnessDivs[this.id].type = "boughtupgrade";
			document.getElementById(this.id).hidden = true;		
			document.getElementById(this.boughtdivid).hidden = false;
		  },
		  costs: [(madnessCost({type: "madness", base: 5000000, current: 5000000}))],
		  minionCosts: [(madnessMinionCost({type: "madnessMinionsEight", base: 2, current: 2}))],
		  unlock: function () {
		    if (currMadness >= 2500000 && madnessMinions['madnessMinionsEight'].current >= 1)
			  return true;
			else
			  return false;
		  }
        }));
		
		// bonus upgrades
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsEightBonusFive'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsEightBonusFive',
		  boughtdivid: 'boughtUpgradeMadnessMinionsEightBonusFive',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Unholy Hours",
		  text: "Your CEOs barely count as human any more. They are working around the clock and expect the same " +
		  "of everyone else. Morale is non-existent but productivity is up.",
		  stats: "Greedy CEOs generate twice as much resources",
		  statsdiv: "madnessMinionsEightConvertStats",
		  costid: 'upgradeMadnessMinionsEightBonusFiveCost',
		  minion: 'madnessMinionsEight',
		  click: function() {upgradeDoubleBonus('upgradeMadnessMinionsEightBonusFive')},
		  costs: [(madnessCost({type: "madness", base: 10000000000, current: 10000000000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsEight'].current >= 100)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsEightBonusFour'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsEightBonusFour',
		  boughtdivid: 'boughtUpgradeMadnessMinionsEightBonusFour',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Environmental Deregulation",
		  text: "Fear of dwindling resources and some clever lobbying open up previously protected lands ripe " +
		  "for exploitation. The expansion will benefit your CEOs greatly.",
		  stats: "Greedy CEOs generate more base resources",
		  statsdiv: "madnessMinionsEightConvertStats",
		  costid: 'upgradeMadnessMinionsEightBonusFourCost',
		  minion: 'madnessMinionsEight',
		  click: function () {upgradeIncreaseBase('upgradeMadnessMinionsEightBonusFour', 10000, 30, 0, 0);},
		  costs: [(madnessCost({type: "madness", base: 50000000, current: 50000000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsEight'].current >= 50)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsEightBonusThree'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsEightBonusThree',
		  boughtdivid: 'boughtUpgradeMadnessMinionsEightBonusThree',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Efficiency Training",
		  text: "Your CEOs can implement efficiency training, a thinly veiled excuse to squeeze more productivity " +
		  "out of all your employees.",
		  stats: "Greedy CEOs generate twice as much resources",
		  statsdiv: "madnessMinionsEightConvertStats",
		  costid: 'upgradeMadnessMinionsEightBonusThreeCost',
		  minion: 'madnessMinionsEight',
		  click: function() {upgradeDoubleBonus('upgradeMadnessMinionsEightBonusThree')},
		  costs: [(madnessCost({type: "madness", base: 5000000, current: 5000000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsEight'].current >= 25)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsEightBonusTwo'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsEightBonusTwo',
		  boughtdivid: 'boughtUpgradeMadnessMinionsEightBonusTwo',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Back Door Deals",
		  text: "With desperate times comes desperate measures. Even the usually wholesome are open to some " +
		  "terrifying compromise and new markets open up.",
		  stats: "Greedy CEOs generate more base resources",
		  statsdiv: "madnessMinionsEightConvertStats",
		  costid: 'upgradeMadnessMinionsEightBonusTwoCost',
		  minion: 'madnessMinionsEight',
		  click: function () {upgradeIncreaseBase('upgradeMadnessMinionsEightBonusTwo', 5000, 10, 0, 0);},
		  costs: [(madnessCost({type: "madness", base: 1500000, current: 1500000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsEight'].current >= 10)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsEightBonusOne'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsEightBonusOne',
		  boughtdivid: 'boughtUpgradeMadnessMinionsEightBonusOne',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Cheap Labor",
		  text: "With madness and fear spreading, people are worried about their security. Your CEOs can exploit " +
		  "this to get dirt cheap labourers.",
		  stats: "Greedy CEOs generate twice as much resources",
		  statsdiv: "madnessMinionsEightConvertStats",
		  costid: 'upgradeMadnessMinionsEightBonusOneCost',
		  minion: 'madnessMinionsEight',
		  click: function() {upgradeDoubleBonus('upgradeMadnessMinionsEightBonusOne')},
		  costs: [(madnessCost({type: "madness", base: 1000000, current: 1000000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsEight'].current >= 5)
			  return true;
			else
			  return false;
		  }
        }));
	
	// ------------------- MADNESS MINIONS 7 ------------------------------
		
		unlockableMadnessDivs['madnessMinionsSevenConvert'] = 
	    (madnessDiv({
          id: 'madnessMinionsSevenConvert',
		  tab: "madnessMadnessTab",
		  subtab: "madnessMadnessBuildingsSubTab",
		  type: "building",
		  title: "Pirate Captain",
		  text: "It takes a hardened soul to survive the new dangers in the sea.  The pirates who can keep at least a shred of their sanity " +
			"will find their pick of weak and profitable prey.",
		  statsdiv: "madnessMinionsSevenConvertStats",
		  minion: "madnessMinionsSeven",
		  costid: 'madnessMinionsSevenConvertCost',
		  click: function () {
		    currMadness -= this.costs[0].current;
			madnessSpent += this.costs[0].current;
			this.timesClicked++;
			totalConvertClicks++;
			this.costCount++;
			calculateAndDisplayCost('madnessMinionsSevenConvert');
			madnessMinions['madnessMinionsSeven'].current++;
			madnessMinions['madnessMinionsSeven'].allTime++;
			totalMinionsConverted++;
		  },
		  costs: [(madnessCost({type: "madness", base: 100000, current: 100000}))],
		  minionCosts: [],
		  unlock: function () {
		    return false;
		  }
        }));
		
		// unlock
	  
	  unlockableMadnessDivs['upgradeMadnessUnlockMinionsEight'] = 
	    (madnessDiv({
          id: 'upgradeMadnessUnlockMinionsEight',
		  boughtdivid: 'boughtUpgradeMadnessUnlockMinionsEight',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Awaken Azathoth",
		  text: "From the center of the unseen universe beyond ours, Azathoth once ruled the cosmos " +
			"until Cthulhu usurped him.  His thirst for power is nigh unquenchable.",
		  stats: "Unlocks a new minion",
		  costid: 'upgradeMadnessUnlockMinionsEightCost',
		  click: function () {
		    currMadness -= this.costs[0].current;
			madnessMinions['madnessMinionsSeven'].current -= this.minionCosts[0].current;
		    this.timesClicked++;
		    this.costCount++;
		    totalUpgrades++;

			var key = 'madnessMinionsEightConvert';
			visibleMadnessDivs[key] = madnessDiv(unlockableMadnessDivs[key]);
		    delete unlockableMadnessDivs[key];
		    document.getElementById(key).hidden = false;
			calculateAndDisplayCost(visibleMadnessDivs[key].id);
			displayAndLogMessage("You unlocked " + visibleMadnessDivs[key].title, visibleMadnessDivs[key].text);
			addNotifyTab('madnessMadnessTab');
			addNotifySubTab('madnessMadnessBuildingsSubTab');
			
			visibleMadnessDivs[this.id].type = "boughtupgrade";
			document.getElementById(this.id).hidden = true;		
			document.getElementById(this.boughtdivid).hidden = false;
			updateMadWorldDiv("Azathoth is awoken");
		  },
		  costs: [(madnessCost({type: "madness", base: 1000000, current: 1000000}))],
		  minionCosts: [(madnessMinionCost({type: "madnessMinionsSeven", base: 2, current: 2}))],
		  unlock: function () {
		    if (currMadness >= 500000 && madnessMinions['madnessMinionsSeven'].current >= 1)
			  return true;
			else
			  return false;
		  }
        }));
		
		// bonus upgrades
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsSevenBonusFive'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsSevenBonusFive',
		  boughtdivid: 'boughtUpgradeMadnessMinionsSevenBonusFive',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Blood for Oil",
		  text: "Your pirates own the seas. They can pillage from oil rigs freely and even governments are willing " +
		  "to make deals with them.",
		  stats: "Pirate Captains generate twice as much resources",
		  statsdiv: "madnessMinionsSevenConvertStats",
		  costid: 'upgradeMadnessMinionsSevenBonusFiveCost',
		  minion: 'madnessMinionsSeven',
		  click: function() {upgradeDoubleBonus('upgradeMadnessMinionsSevenBonusFive')},
		  costs: [(madnessCost({type: "madness", base: 1500000000, current: 1500000000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsSeven'].current >= 100)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsSevenBonusFour'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsSevenBonusFour',
		  boughtdivid: 'boughtUpgradeMadnessMinionsSevenBonusFour',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Raiding Parties",
		  text: "Your pirate captains no longer know fear as anything other than a constant vibration in the " +
		  "back of their minds. They can now raid cities as well.",
		  stats: "Pirate Captains generate more base resources",
		  statsdiv: "madnessMinionsSevenConvertStats",
		  costid: 'upgradeMadnessMinionsSevenBonusFourCost',
		  minion: 'madnessMinionsSeven',
		  click: function () {upgradeIncreaseBase('upgradeMadnessMinionsSevenBonusFour', 3000, 5, 0, 0);},
		  costs: [(madnessCost({type: "madness", base: 10000000, current: 10000000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsSeven'].current >= 50)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsSevenBonusThree'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsSevenBonusThree',
		  boughtdivid: 'boughtUpgradeMadnessMinionsSevenBonusThree',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Synthetic Drug",
		  text: "Random infections from the sea monsters have led to the creation of a synthetic drug. The " +
		  "single mindedness of the fury it generates is impressive and concerning.",
		  stats: "Pirate Captains generate twice as much resources",
		  statsdiv: "madnessMinionsSevenConvertStats",
		  costid: 'upgradeMadnessMinionsSevenBonusThreeCost',
		  minion: 'madnessMinionsSeven',
		  click: function() {upgradeDoubleBonus('upgradeMadnessMinionsSevenBonusThree')},
		  costs: [(madnessCost({type: "madness", base: 1000000, current: 1000000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsSeven'].current >= 25)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsSevenBonusTwo'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsSevenBonusTwo',
		  boughtdivid: 'boughtUpgradeMadnessMinionsSevenBonusTwo',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Occult Trade",
		  text: "Increasingly frequent battles with impossible creatures yields some terrifying leftovers. Turns " +
		  "out there are certain people willing to pay for them.",
		  stats: "Pirate Captains generate more base resources",
		  statsdiv: "madnessMinionsSevenConvertStats",
		  costid: 'upgradeMadnessMinionsSevenBonusTwoCost',
		  minion: 'madnessMinionsSeven',
		  click: function () {upgradeIncreaseBase('upgradeMadnessMinionsSevenBonusTwo', 1000, 3, 0, 0);},
		  costs: [(madnessCost({type: "madness", base: 250000, current: 250000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsSeven'].current >= 10)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsSevenBonusOne'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsSevenBonusOne',
		  boughtdivid: 'boughtUpgradeMadnessMinionsSevenBonusOne',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Terrifying Visage",
		  text: "Your captains and their ships are slowly being transformed by their time at sea. Frightful " +
		  "and intense, they will be able to steal more.",
		  stats: "Pirate Captains generate twice as much resources",
		  statsdiv: "madnessMinionsSevenConvertStats",
		  costid: 'upgradeMadnessMinionsSevenBonusOneCost',
		  minion: 'madnessMinionsSeven',
		  click: function() {upgradeDoubleBonus('upgradeMadnessMinionsSevenBonusOne')},
		  costs: [(madnessCost({type: "madness", base: 150000, current: 150000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsSeven'].current >= 5)
			  return true;
			else
			  return false;
		  }
        }));
	
	// ------------------- MADNESS MINIONS 6 ------------------------------
		
		unlockableMadnessDivs['madnessMinionsSixConvert'] = 
	    (madnessDiv({
          id: 'madnessMinionsSixConvert',
		  tab: "madnessMadnessTab",
		  subtab: "madnessMadnessBuildingsSubTab",
		  type: "building",
		  title: "Carcosan Architect",
		  text: "After an architect sees the buildings in Carcosa nothing they create will ever be the same.",
		  statsdiv: "madnessMinionsSixConvertStats",
		  minion: "madnessMinionsSix",
		  costid: 'madnessMinionsSixConvertCost',
		  click: function () {
		    currMadness -= this.costs[0].current;
			madnessSpent += this.costs[0].current;
			this.timesClicked++;
			totalConvertClicks++;
			this.costCount++;
			calculateAndDisplayCost('madnessMinionsSixConvert');
			madnessMinions['madnessMinionsSix'].current++;
			madnessMinions['madnessMinionsSix'].allTime++;
			totalMinionsConverted++;
		  },
		  costs: [(madnessCost({type: "madness", base: 20000, current: 20000}))],
		  minionCosts: [],
		  unlock: function () {
		    return false;
		  }
        }));
		
		// unlock
	  
	  unlockableMadnessDivs['upgradeMadnessUnlockMinionsSeven'] = 
	    (madnessDiv({
          id: 'upgradeMadnessUnlockMinionsSeven',
		  boughtdivid: 'boughtUpgradeMadnessUnlockMinionsSeven',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Enter the Dagon",
		  text: "The time has come to wake Father Dagon. The seas roar with madness in anticipation. The journey will " +
		    "be fraught with genuinely unimaginable danger.",
		  stats: "Unlocks a new minion",
		  costid: 'upgradeMadnessUnlockMinionsSevenCost',
		  click: function () {
		    currMadness -= this.costs[0].current;
			madnessMinions['madnessMinionsSix'].current -= this.minionCosts[0].current;
		    this.timesClicked++;
		    this.costCount++;
		    totalUpgrades++;

			var key = 'madnessMinionsSevenConvert';
			visibleMadnessDivs[key] = madnessDiv(unlockableMadnessDivs[key]);
		    delete unlockableMadnessDivs[key];
		    document.getElementById(key).hidden = false;
			calculateAndDisplayCost(visibleMadnessDivs[key].id);
			displayAndLogMessage("You unlocked " + visibleMadnessDivs[key].title, visibleMadnessDivs[key].text);
			addNotifyTab('madnessMadnessTab');
			addNotifySubTab('madnessMadnessBuildingsSubTab');
			
			visibleMadnessDivs[this.id].type = "boughtupgrade";
			document.getElementById(this.id).hidden = true;		
			document.getElementById(this.boughtdivid).hidden = false;
			updateMadWorldDiv("Father Dagon is active in the seas");
		  },
		  costs: [(madnessCost({type: "madness", base: 250000, current: 250000}))],
		  minionCosts: [(madnessMinionCost({type: "madnessMinionsSix", base: 2, current: 2}))],
		  unlock: function () {
		    if (currMadness >= 125000 && madnessMinions['madnessMinionsSix'].current >= 1)
			  return true;
			else
			  return false;
		  }
        }));
		
		// bonus upgrades
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsSixBonusFive'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsSixBonusFive',
		  boughtdivid: 'boughtUpgradeMadnessMinionsSixBonusFive',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Imposing Office Building",
		  text: "The terrifying look your architects have cultivated is perfect for businesses trying to " +
		  "intimidate their competition.",
		  stats: "Carcosan Architects generate twice as much resources",
		  statsdiv: "madnessMinionsSixConvertStats",
		  costid: 'upgradeMadnessMinionsSixBonusFiveCost',
		  minion: 'madnessMinionsSix',
		  click: function() {upgradeDoubleBonus('upgradeMadnessMinionsSixBonusFive')},
		  costs: [(madnessCost({type: "madness", base: 300000000, current: 300000000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsSix'].current >= 100)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsSixBonusFour'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsSixBonusFour',
		  boughtdivid: 'boughtUpgradeMadnessMinionsSixBonusFour',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Maximized Profit",
		  text: "Using math that would drive a saner man mad, your architects will find ways to cut corners and " +
		  "charge more for it.",
		  stats: "Carcosan Architects generate more base resources",
		  statsdiv: "madnessMinionsSixConvertStats",
		  costid: 'upgradeMadnessMinionsSixBonusFourCost',
		  minion: 'madnessMinionsSix',
		  click: function () {upgradeIncreaseBase('upgradeMadnessMinionsSixBonusFour', 500, 1, 0, 0);},
		  costs: [(madnessCost({type: "madness", base: 2500000, current: 2500000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsSix'].current >= 50)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsSixBonusThree'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsSixBonusThree',
		  boughtdivid: 'boughtUpgradeMadnessMinionsSixBonusThree',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Horrible Apartments",
		  text: "Efficiency can go too far. The apartments your architects make are terrible, but so efficient the " +
		  "owners can charge very low rent, so they remain popular nonetheless.",
		  stats: "Carcosan Architects generate twice as much resources",
		  statsdiv: "madnessMinionsSixConvertStats",
		  costid: 'upgradeMadnessMinionsSixBonusThreeCost',
		  minion: 'madnessMinionsSix',
		  click: function() {upgradeDoubleBonus('upgradeMadnessMinionsSixBonusThree')},
		  costs: [(madnessCost({type: "madness", base: 200000, current: 200000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsSix'].current >= 25)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsSixBonusTwo'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsSixBonusTwo',
		  boughtdivid: 'boughtUpgradeMadnessMinionsSixBonusTwo',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Efficient Layout",
		  text: "Their minds expanded to work in more dimensions, your architects layouts are unconventional " +
		  "yet efficient, which will allow them to charge more for their work.",
		  stats: "Carcosan Architects generate more base resources",
		  statsdiv: "madnessMinionsSixConvertStats",
		  costid: 'upgradeMadnessMinionsSixBonusTwoCost',
		  minion: 'madnessMinionsSix',
		  click: function () {upgradeIncreaseBase('upgradeMadnessMinionsSixBonusTwo', 300, .5, 0, 0);},
		  costs: [(madnessCost({type: "madness", base: 50000, current: 50000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsSix'].current >= 10)
			  return true;
			else
			  return false;
		  }
        }));
		
	  unlockableMadnessDivs['upgradeMadnessMinionsSixBonusOne'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsSixBonusOne',
		  boughtdivid: 'boughtUpgradeMadnessMinionsSixBonusOne',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Uncomfortable Condo",
		  text: "The small homes in Carcosa are far from comfortable, but they look fascinating to people " +
		  "and they are cheap to build, making them extremely popular.",
		  stats: "Carcosan Architects generate twice as much resources",
		  statsdiv: "madnessMinionsSixConvertStats",
		  costid: 'upgradeMadnessMinionsSixBonusOneCost',
		  minion: 'madnessMinionsSix',
		  click: function() {upgradeDoubleBonus('upgradeMadnessMinionsSixBonusOne')},
		  costs: [(madnessCost({type: "madness", base: 30000, current: 30000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsSix'].current >= 5)
			  return true;
			else
			  return false;
		  }
        }));
	
	// ------------------- MADNESS MINIONS 5 ------------------------------
		
		unlockableMadnessDivs['madnessMinionsFiveConvert'] = 
	    (madnessDiv({
          id: 'madnessMinionsFiveConvert',
		  tab: "madnessMadnessTab",
		  subtab: "madnessMadnessBuildingsSubTab",
		  type: "building",
		  title: "Avant-Garde Artist",
		  text: "Visions of a play that should never be read dance through the minds of the creative. The " +
			"work of avant-garde artists becomes more confusing, and more popular.",
		  statsdiv: "madnessMinionsFiveConvertStats",
		  minion: "madnessMinionsFive",
		  costid: 'madnessMinionsFiveConvertCost',
		  click: function () {
		    currMadness -= this.costs[0].current;
			madnessSpent += this.costs[0].current;
			this.timesClicked++;
			totalConvertClicks++;
			this.costCount++;
			calculateAndDisplayCost('madnessMinionsFiveConvert');
			madnessMinions['madnessMinionsFive'].current++;
			madnessMinions['madnessMinionsFive'].allTime++;
			totalMinionsConverted++;
		  },
		  costs: [(madnessCost({type: "madness", base: 5000, current: 5000}))],
		  minionCosts: [],
		  unlock: function () {
		    return false;
		  }
        }));
		
		// unlock
	  
	  unlockableMadnessDivs['upgradeMadnessUnlockMinionsSix'] = 
	    (madnessDiv({
          id: 'upgradeMadnessUnlockMinionsSix',
		  boughtdivid: 'boughtUpgradeMadnessUnlockMinionsSix',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Summon Hastur to Earth",
		  text: "Hastur alone possesses to power to transport people to and from Carcosa. Much sacrifice " +
			"will be needed to convince him the trip is worthwhile.",
		  stats: "Unlocks a new minion",
		  costid: 'upgradeMadnessUnlockMinionsSixCost',
		  click: function () {
		    currMadness -= this.costs[0].current;
			madnessMinions['madnessMinionsFive'].current -= this.minionCosts[0].current;
		    this.timesClicked++;
		    this.costCount++;
		    totalUpgrades++;

			var key = 'madnessMinionsSixConvert';
			visibleMadnessDivs[key] = madnessDiv(unlockableMadnessDivs[key]);
		    delete unlockableMadnessDivs[key];
		    document.getElementById(key).hidden = false;
			calculateAndDisplayCost(visibleMadnessDivs[key].id);
			displayAndLogMessage("You unlocked " + visibleMadnessDivs[key].title, visibleMadnessDivs[key].text);
			addNotifyTab('madnessMadnessTab');
			addNotifySubTab('madnessMadnessBuildingsSubTab');
			
			visibleMadnessDivs[this.id].type = "boughtupgrade";
			document.getElementById(this.id).hidden = true;		
			document.getElementById(this.boughtdivid).hidden = false;
			updateMadWorldDiv("Hastur is transporting people to Carcosa");
		  },
		  costs: [(madnessCost({type: "madness", base: 50000, current: 50000}))],
		  minionCosts: [(madnessMinionCost({type: "madnessMinionsFive", base: 2, current: 2}))],
		  unlock: function () {
		    if (currMadness >= 25000 && madnessMinions['madnessMinionsFive'].current >= 1)
			  return true;
			else
			  return false;
		  }
        }));
		
		// bonus upgrades
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsFiveBonusFive'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsFiveBonusFive',
		  boughtdivid: 'boughtUpgradeMadnessMinionsFiveBonusFive',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Art Jaune Movement",
		  text: "Your artists will start a movement. Maddening and impossible artwork will become very popular " +
          "and your minions will be at the front of it.",
		  stats: "Avant-Garde Artists generate twice as much resources",
		  statsdiv: "madnessMinionsFiveConvertStats",
		  costid: 'upgradeMadnessMinionsFiveBonusFiveCost',
		  minion: 'madnessMinionsFive',
		  click: function() {upgradeDoubleBonus('upgradeMadnessMinionsFiveBonusFive')},
		  costs: [(madnessCost({type: "madness", base: 50000000, current: 50000000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsFive'].current >= 100)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsFiveBonusFour'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsFiveBonusFour',
		  boughtdivid: 'boughtUpgradeMadnessMinionsFiveBonusFour',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Gallery Showing",
		  text: "An art gallery will feature the work of your artists. People will be horrified but entranced, " +
		  "allowing your artists to charge more for their work.",
		  stats: "Avant-Garde Artists generate more base resources",
		  statsdiv: "madnessMinionsFiveConvertStats",
		  costid: 'upgradeMadnessMinionsFiveBonusFourCost',
		  minion: 'madnessMinionsFive',
		  click: function () {upgradeIncreaseBase('upgradeMadnessMinionsFiveBonusFour', 100, .3, 0, 0);},
		  costs: [(madnessCost({type: "madness", base: 500000, current: 500000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsFive'].current >= 50)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsFiveBonusThree'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsFiveBonusThree',
		  boughtdivid: 'boughtUpgradeMadnessMinionsFiveBonusThree',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "N-Dimensional Golden Ratio",
		  text: "Your artists minds have expanded to the point where they can see in dimensions others can " +
		  "not. They expand the golden ratio into these dimensions to great acclaim.",
		  stats: "Avant-Garde Artists generate twice as much resources",
		  statsdiv: "madnessMinionsFiveConvertStats",
		  costid: 'upgradeMadnessMinionsFiveBonusThreeCost',
		  minion: 'madnessMinionsFive',
		  click: function() {upgradeDoubleBonus('upgradeMadnessMinionsFiveBonusThree')},
		  costs: [(madnessCost({type: "madness", base: 50000, current: 50000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsFive'].current >= 25)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsFiveBonusTwo'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsFiveBonusTwo',
		  boughtdivid: 'boughtUpgradeMadnessMinionsFiveBonusTwo',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Favorable Review",
		  text: "Your artists will be featured in a popular art review magazine. The favorable reviews will " +
		  "allow them to charge more for their art.",
		  stats: "Avant-Garde Artists generate more base resources",
		  statsdiv: "madnessMinionsFiveConvertStats",
		  costid: 'upgradeMadnessMinionsFiveBonusTwoCost',
		  minion: 'madnessMinionsFive',
		  click: function () {upgradeIncreaseBase('upgradeMadnessMinionsFiveBonusTwo', 50, .1, 0, 0);},
		  costs: [(madnessCost({type: "madness", base: 15000, current: 15000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsFive'].current >= 10)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsFiveBonusOne'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsFiveBonusOne',
		  boughtdivid: 'boughtUpgradeMadnessMinionsFiveBonusOne',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Mixed Media",
		  text: "Your artists will start to mix oils with video, light with hanging shards of glass, and other " +
		  "experimental medium mixtures. They become even more popular.",
		  stats: "Avant-Garde Artists generate twice as much resources",
		  statsdiv: "madnessMinionsFiveConvertStats",
		  costid: 'upgradeMadnessMinionsFiveBonusOneCost',
		  minion: 'madnessMinionsFive',
		  click: function() {upgradeDoubleBonus('upgradeMadnessMinionsFiveBonusOne')},
		  costs: [(madnessCost({type: "madness", base: 10000, current: 10000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsFive'].current >= 5)
			  return true;
			else
			  return false;
		  }
        }));
	
	// ------------------- MADNESS MINIONS 4 ------------------------------
		
		unlockableMadnessDivs['madnessMinionsFourConvert'] = 
	    (madnessDiv({
          id: 'madnessMinionsFourConvert',
		  tab: "madnessMadnessTab",
		  subtab: "madnessMadnessBuildingsSubTab",
		  type: "building",
		  title: "Conspiracy Theorist",
		  text: "Sightings of strange creatures lead to wild speculation by conspiracy theorists. No matter how horrifying " +
		    "their theories are they fall short.",
		  statsdiv: "madnessMinionsFourConvertStats",
		  minion: "madnessMinionsFour",
		  costid: 'madnessMinionsFourConvertCost',
		  click: function () {
		    currMadness -= this.costs[0].current;
			madnessSpent += this.costs[0].current;
			this.timesClicked++;
			totalConvertClicks++;
			this.costCount++;
			calculateAndDisplayCost('madnessMinionsFourConvert');
			madnessMinions['madnessMinionsFour'].current++;
			madnessMinions['madnessMinionsFour'].allTime++;
			totalMinionsConverted++;
		  },
		  costs: [(madnessCost({type: "madness", base: 1000, current: 1000}))],
		  minionCosts: [],
		  unlock: function () {
		    return false;
		  }
        }));
		
		// unlock
	  
	  unlockableMadnessDivs['upgradeMadnessUnlockMinionsFive'] = 
	    (madnessDiv({
          id: 'upgradeMadnessUnlockMinionsFive',
		  boughtdivid: 'boughtUpgradeMadnessUnlockMinionsFive',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Contact the King in Yellow",
		  text: "As madness increases, the yellow sign becomes clearer. A dangerous invocation " +
		    "will reveal a gateway in the mind to Carcosa, where the King in Yellow resides.",
		  stats: "Unlocks a new minion",
		  costid: 'upgradeMadnessUnlockMinionsFiveCost',
		  click: function () {
		    currMadness -= this.costs[0].current;
			madnessMinions['madnessMinionsFour'].current -= this.minionCosts[0].current;
		    this.timesClicked++;
		    this.costCount++;
		    totalUpgrades++;

			var key = 'madnessMinionsFiveConvert';
			visibleMadnessDivs[key] = madnessDiv(unlockableMadnessDivs[key]);
		    delete unlockableMadnessDivs[key];
		    document.getElementById(key).hidden = false;
			calculateAndDisplayCost(visibleMadnessDivs[key].id);
			displayAndLogMessage("You unlocked " + visibleMadnessDivs[key].title, visibleMadnessDivs[key].text);
			addNotifyTab('madnessMadnessTab');
			addNotifySubTab('madnessMadnessBuildingsSubTab');
			
			visibleMadnessDivs[this.id].type = "boughtupgrade";
			document.getElementById(this.id).hidden = true;		
			document.getElementById(this.boughtdivid).hidden = false;
			updateMadWorldDiv("Contact has been made with the King in Yellow");
		  },
		  costs: [(madnessCost({type: "madness", base: 10000, current: 10000}))],
		  minionCosts: [(madnessMinionCost({type: "madnessMinionsFour", base: 2, current: 2}))],
		  unlock: function () {
		    if (currMadness >= 5000 && madnessMinions['madnessMinionsFour'].current >= 1)
			  return true;
			else
			  return false;
		  }
        }));
		
		// bonus upgrades
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsFourBonusFive'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsFourBonusFive',
		  boughtdivid: 'boughtUpgradeMadnessMinionsFourBonusFive',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Cell Phone Video",
		  text: "Someone captured a video of the creatures in the wild. All analysis reveals it to be real but no one knows " +
		  "what it actually is, just that it scares them.",
		  stats: "Conspiracy Theorists generate twice as much madness",
		  statsdiv: "madnessMinionsFourConvertStats",
		  costid: 'upgradeMadnessMinionsFourBonusFiveCost',
		  minion: 'madnessMinionsFour',
		  click: function() {upgradeDoubleBonus('upgradeMadnessMinionsFourBonusFive')},
		  costs: [(madnessCost({type: "madness", base: 20000000, current: 20000000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsFour'].current >= 100)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsFourBonusFour'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsFourBonusFour',
		  boughtdivid: 'boughtUpgradeMadnessMinionsFourBonusFour',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Local News Story",
		  text: "&quot;Area Man Sees Alien Entity&quot; is the headline on the local news. Reports pop up all over the " +
		  "world of people claiming to have seen them, their obvious insanity aside.",
		  stats: "Conspiracy Theorists generate 30 more base madness",
		  statsdiv: "madnessMinionsFourConvertStats",
		  costid: 'upgradeMadnessMinionsFourBonusFourCost',
		  minion: 'madnessMinionsFour',
		  click: function () {upgradeIncreaseBase('upgradeMadnessMinionsFourBonusFour', 30, 0, 0, 0);},
		  costs: [(madnessCost({type: "madness", base: 150000, current: 150000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsFour'].current >= 50)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsFourBonusThree'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsFourBonusThree',
		  boughtdivid: 'boughtUpgradeMadnessMinionsFourBonusThree',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Blurry Photos",
		  text: "Its impossible to tell whether the blurry photographs really are of an alien species, but your conspiracy " +
		  "theorists are convinced, and they convince many others.",
		  stats: "Conspiracy Theorists generate twice as much madness",
		  statsdiv: "madnessMinionsFourConvertStats",
		  costid: 'upgradeMadnessMinionsFourBonusThreeCost',
		  minion: 'madnessMinionsFour',
		  click: function() {upgradeDoubleBonus('upgradeMadnessMinionsFourBonusThree')},
		  costs: [(madnessCost({type: "madness", base: 10000, current: 10000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsFour'].current >= 25)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsFourBonusTwo'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsFourBonusTwo',
		  boughtdivid: 'boughtUpgradeMadnessMinionsFourBonusTwo',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Tabloid Magazines",
		  text: "Tabloid magazines will begin running stories about the strange creatures. Despite their unreliability " +
		  "newsstands everywhere help the madness spread.",
		  stats: "Conspiracy Theorists generate 10 more base madness",
		  statsdiv: "madnessMinionsFourConvertStats",
		  costid: 'upgradeMadnessMinionsFourBonusTwoCost',
		  minion: 'madnessMinionsFour',
		  click: function () {upgradeIncreaseBase('upgradeMadnessMinionsFourBonusTwo', 10, 0, 0, 0);},
		  costs: [(madnessCost({type: "madness", base: 2500, current: 2500}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsFour'].current >= 10)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsFourBonusOne'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsFourBonusOne',
		  boughtdivid: 'boughtUpgradeMadnessMinionsFourBonusOne',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Crude Drawings",
		  text: "Your conspiracy theorists will get ahold of crude drawings of the creatures which only fuels their " +
		  "theories and constant chatter.",
		  stats: "Conspiracy Theorists generate twice as much madness",
		  statsdiv: "madnessMinionsFourConvertStats",
		  costid: 'upgradeMadnessMinionsFourBonusOneCost',
		  minion: 'madnessMinionsFour',
		  click: function() {upgradeDoubleBonus('upgradeMadnessMinionsFourBonusOne')},
		  costs: [(madnessCost({type: "madness", base: 1500, current: 1500}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsFour'].current >= 5)
			  return true;
			else
			  return false;
		  }
        }));
	
	// ------------------- MADNESS MINIONS 3 ------------------------------
		
		unlockableMadnessDivs['madnessMinionsThreeConvert'] = 
	    (madnessDiv({
          id: 'madnessMinionsThreeConvert',
		  tab: "madnessMadnessTab",
		  subtab: "madnessMadnessBuildingsSubTab",
		  type: "building",
		  title: "CDC Investigator",
		  text: "Strange spores and fungi are mutating and bringing incurable diseases with them. The " +
			"CDC is learning vanishingly little, but spreading great fear and hysteria.",
		  statsdiv: "madnessMinionsThreeConvertStats",
		  minion: "madnessMinionsThree",
		  costid: 'madnessMinionsThreeConvertCost',
		  click: function () {
		    currMadness -= this.costs[0].current;
			madnessSpent += this.costs[0].current;
			this.timesClicked++;
			totalConvertClicks++;
			this.costCount++;
			calculateAndDisplayCost('madnessMinionsThreeConvert');
			madnessMinions['madnessMinionsThree'].current++;
			madnessMinions['madnessMinionsThree'].allTime++;
			totalMinionsConverted++;
		  },
		  costs: [(madnessCost({type: "madness", base: 250, current: 250}))],
		  minionCosts: [],
		  unlock: function () {
		    return false;
		  }
        }));
		
		// unlock

	  unlockableMadnessDivs['upgradeMadnessUnlockMinionsFour'] = 
	    (madnessDiv({
          id: 'upgradeMadnessUnlockMinionsFour',
		  boughtdivid: 'boughtUpgradeMadnessUnlockMinionsFour',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Awaken Shub-Niggurath",
		  text: "After a sufficient sacrifice, the Black Goat of the woods with a Thousand Young will awaken, and her " +
		    "young will begin to spread around the world.",
		  stats: "Unlocks a new minion",
		  costid: 'upgradeMadnessUnlockMinionsFourCost',
		  click: function () {
		    currMadness -= this.costs[0].current;
			madnessMinions['madnessMinionsThree'].current -= this.minionCosts[0].current;
		    this.timesClicked++;
		    this.costCount++;
		    totalUpgrades++;

			var key = 'madnessMinionsFourConvert';
			visibleMadnessDivs[key] = madnessDiv(unlockableMadnessDivs[key]);
		    delete unlockableMadnessDivs[key];
		    document.getElementById(key).hidden = false;
			calculateAndDisplayCost(visibleMadnessDivs[key].id);
			displayAndLogMessage("You unlocked " + visibleMadnessDivs[key].title, visibleMadnessDivs[key].text);
			addNotifyTab('madnessMadnessTab');
			addNotifySubTab('madnessMadnessBuildingsSubTab');

			visibleMadnessDivs[this.id].type = "boughtupgrade";
			document.getElementById(this.id).hidden = true;		
			document.getElementById(this.boughtdivid).hidden = false;
			updateMadWorldDiv("Shub-Niggurath's Thousand Young are spreading throughout the world");
		  },
		  costs: [(madnessCost({type: "madness", base: 2500, current: 2500}))],
		  minionCosts: [(madnessMinionCost({type: "madnessMinionsThree", base: 2, current: 2}))],
		  unlock: function () {
		    if (currMadness >= 1250 && madnessMinions['madnessMinionsThree'].current >= 1)
			  return true;
			else
			  return false;
		  }
        }));
		
		// bonus upgrades
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsThreeBonusFive'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsThreeBonusFive',
		  boughtdivid: 'boughtUpgradeMadnessMinionsThreeBonusFive',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Elevated Threat Level",
		  text: "The CDC will run out of ideas. They can't explain what the fungus is, only that its dangerous. An elevated threat " +
		  "warns people, but of what, no one knows.",
		  stats: "CDC Investigators generate twice as much madness",
		  statsdiv: "madnessMinionsThreeConvertStats",
		  costid: 'upgradeMadnessMinionsThreeBonusFiveCost',
		  minion: 'madnessMinionsThree',
		  click: function() {upgradeDoubleBonus('upgradeMadnessMinionsThreeBonusFive')},
		  costs: [(madnessCost({type: "madness", base: 4000000, current: 4000000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsThree'].current >= 100)
			  return true;
			else
			  return false;
		  }
        }));
		
	  unlockableMadnessDivs['upgradeMadnessMinionsThreeBonusFour'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsThreeBonusFour',
		  boughtdivid: 'boughtUpgradeMadnessMinionsThreeBonusFour',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Spore Infection",
		  text: "CDC investigators will begin to fall prey to infection from the spores. Their minds no longer their own, their " +
		  "reports become nigh indecipherable tributes to fear.",
		  stats: "CDC Investigators generate 5 more base madness",
		  statsdiv: "madnessMinionsThreeConvertStats",
		  costid: 'upgradeMadnessMinionsThreeBonusFourCost',
		  minion: 'madnessMinionsThree',
		  click: function () {upgradeIncreaseBase('upgradeMadnessMinionsThreeBonusFour', 5, 0, 0, 0);},
		  costs: [(madnessCost({type: "madness", base: 35000, current: 35000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsThree'].current >= 50)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsThreeBonusThree'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsThreeBonusThree',
		  boughtdivid: 'boughtUpgradeMadnessMinionsThreeBonusThree',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Published Report",
		  text: "The first published report of the CDC findings will send shock waves through the scientific community. The fungi " +
		  "might not be a fungus at all, or even terrestrial in origin.",
		  stats: "CDC Investigators generate twice as much madness",
		  statsdiv: "madnessMinionsThreeConvertStats",
		  costid: 'upgradeMadnessMinionsThreeBonusThreeCost',
		  minion: 'madnessMinionsThree',
		  click: function() {upgradeDoubleBonus('upgradeMadnessMinionsThreeBonusThree')},
		  costs: [(madnessCost({type: "madness", base: 3000, current: 3000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsThree'].current >= 25)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsThreeBonusTwo'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsThreeBonusTwo',
		  boughtdivid: 'boughtUpgradeMadnessMinionsThreeBonusTwo',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Quarantined Lab",
		  text: "The first lab to contain the fungi will be locked down under quarantine in suspicious conditions. Everyone who " +
		  "studies the fungi is set on edge and paranoia sets in.",
		  stats: "CDC Investigators generate 3 more base madness",
		  statsdiv: "madnessMinionsThreeConvertStats",
		  costid: 'upgradeMadnessMinionsThreeBonusTwoCost',
		  minion: 'madnessMinionsThree',
		  click: function () {upgradeIncreaseBase('upgradeMadnessMinionsThreeBonusTwo', 3, 0, 0, 0);},
		  costs: [(madnessCost({type: "madness", base: 1000, current: 1000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsThree'].current >= 10)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsThreeBonusOne'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsThreeBonusOne',
		  boughtdivid: 'boughtUpgradeMadnessMinionsThreeBonusOne',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Impossible Math",
		  text: "Tracking the growth of the fungi leads the CDC to use formulas beyond the minds of mortals. " +
		  "They will show it to colleagues and stretch their minds in unfortunate ways.",
		  stats: "CDC Investigators generate twice as much madness",
		  statsdiv: "madnessMinionsThreeConvertStats",
		  costid: 'upgradeMadnessMinionsThreeBonusOneCost',
		  minion: 'madnessMinionsThree',
		  click: function() {upgradeDoubleBonus('upgradeMadnessMinionsThreeBonusOne')},
		  costs: [(madnessCost({type: "madness", base: 500, current: 500}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsThree'].current >= 5)
			  return true;
			else
			  return false;
		  }
        }));
	
	// ------------------- MADNESS MINIONS 2 ------------------------------
		
	  unlockableMadnessDivs['madnessMinionsTwoConvert'] = 
	    (madnessDiv({
          id: 'madnessMinionsTwoConvert',
		  tab: "madnessMadnessTab",
		  subtab: "madnessMadnessBuildingsSubTab",
		  type: "building",
		  title: "Suspicious Sailor",
		  text: "Seeing the deep ones in the sea has frayed the minds of sailors. No one believes their tales of froglike " +
		  "fishmen, but it unsettles them nonetheless.",
		  statsdiv: "madnessMinionsTwoConvertStats",
		  minion: "madnessMinionsTwo",
		  costid: 'madnessMinionsTwoConvertCost',
		  click: function () {
		    currMadness -= this.costs[0].current;
			madnessSpent += this.costs[0].current;
			this.timesClicked++;
			totalConvertClicks++;
			this.costCount++;
			calculateAndDisplayCost('madnessMinionsTwoConvert');
			madnessMinions['madnessMinionsTwo'].current++;
			madnessMinions['madnessMinionsTwo'].allTime++;
			totalMinionsConverted++;
		  },
		  costs: [(madnessCost({type: "madness", base: 50, current: 50}))],
		  minionCosts: [],
		  unlock: function () {
		    return false;
		  }
        }));
		
		// unlock
	  
	  unlockableMadnessDivs['upgradeMadnessUnlockMinionsThree'] = 
	    (madnessDiv({
          id: 'upgradeMadnessUnlockMinionsThree',
		  boughtdivid: 'boughtUpgradeMadnessUnlockMinionsThree',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Take a Trip to Yuggoth",
		  text: "Pluto may not be a planet anymore, but known by its ancient name of Yuggoth it is home to terrible " +
			"fungi known as Mi-Go.",
		  stats: "Unlocks a new minion",
		  costid: 'upgradeMadnessUnlockMinionsThreeCost',
		  click: function () {
		    currMadness -= this.costs[0].current;
			madnessMinions['madnessMinionsTwo'].current -= this.minionCosts[0].current;
		    this.timesClicked++;
		    this.costCount++;
		    totalUpgrades++;

			var key = 'madnessMinionsThreeConvert';
			visibleMadnessDivs[key] = madnessDiv(unlockableMadnessDivs[key]);
		    delete unlockableMadnessDivs[key];
		    document.getElementById(key).hidden = false;
			calculateAndDisplayCost(visibleMadnessDivs[key].id);
			displayAndLogMessage("You unlocked " + visibleMadnessDivs[key].title, visibleMadnessDivs[key].text);
			addNotifyTab('madnessMadnessTab');
			addNotifySubTab('madnessMadnessBuildingsSubTab');

			visibleMadnessDivs[this.id].type = "boughtupgrade";
			document.getElementById(this.id).hidden = true;		
			document.getElementById(this.boughtdivid).hidden = false;
			updateMadWorldDiv("Mi-Go from Yuggoth are infesting our world as fungus");
		  },
		  costs: [(madnessCost({type: "madness", base: 1000, current: 1000}))],
		  minionCosts: [(madnessMinionCost({type: "madnessMinionsTwo", base: 2, current: 2}))],
		  unlock: function () {
		    if (currMadness >= 500 && madnessMinions['madnessMinionsTwo'].current >= 1)
			  return true;
			else
			  return false;
		  }
        }));
		
		// bonus upgrades
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsTwoBonusFive'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsTwoBonusFive',
		  boughtdivid: 'boughtUpgradeMadnessMinionsTwoBonusFive',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Local Legend",
		  text: "People will come from out of town to buy your sailors a drink and hear their strange tales. They try not to " +
		    "believe it but the chill in their spine is here to stay.",
		  stats: "Suspicious Sailors generate twice as much madness",
		  statsdiv: "madnessMinionsTwoConvertStats",
		  costid: 'upgradeMadnessMinionsTwoBonusFiveCost',
		  minion: 'madnessMinionsTwo',
		  click: function() {upgradeDoubleBonus('upgradeMadnessMinionsTwoBonusFive')},
		  costs: [(madnessCost({type: "madness", base: 1000000, current: 1000000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsTwo'].current >= 100)
			  return true;
			else
			  return false;
		  }
        }));
		
	  unlockableMadnessDivs['upgradeMadnessMinionsTwoBonusFour'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsTwoBonusFour',
		  boughtdivid: 'boughtUpgradeMadnessMinionsTwoBonusFour',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Naming the Unnameable",
		  text: "Names and images, too foreign to comprehend rationally, will enter your sailors minds. Their stories work in " +
		    "these elements drawing a horrified and entranced crowd.",
		  stats: "Suspicious Sailors generate 1 more base madness",
		  statsdiv: "madnessMinionsTwoConvertStats",
		  costid: 'upgradeMadnessMinionsTwoBonusFourCost',
		  minion: 'madnessMinionsTwo',
		  click: function () {upgradeIncreaseBase('upgradeMadnessMinionsTwoBonusFour', 1, 0, 0, 0);},
		  costs: [(madnessCost({type: "madness", base: 5000, current: 5000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsTwo'].current >= 50)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsTwoBonusThree'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsTwoBonusThree',
		  boughtdivid: 'boughtUpgradeMadnessMinionsTwoBonusThree',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Bar Regular",
		  text: "Your sailors can become regulars at their local bar. Telling every patron, whether they want to hear or not, " +
		  "about the horrors that lurk below the waves.",
		  stats: "Suspicious Sailors generate twice as much madness",
		  statsdiv: "madnessMinionsTwoConvertStats",
		  costid: 'upgradeMadnessMinionsTwoBonusThreeCost',
		  minion: 'madnessMinionsTwo',
		  click: function() {upgradeDoubleBonus('upgradeMadnessMinionsTwoBonusThree')},
		  costs: [(madnessCost({type: "madness", base: 1000, current: 1000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsTwo'].current >= 25)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsTwoBonusTwo'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsTwoBonusTwo',
		  boughtdivid: 'boughtUpgradeMadnessMinionsTwoBonusTwo',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Clearer Descriptions",
		  text: "Your sailors can remember more about the creatures they saw. Clearer and more " +
		  "elaborate descriptions become part of the story they tell to anyone who will listen.",
		  stats: "Suspicious Sailors generate .5 more base madness",
		  statsdiv: "madnessMinionsTwoConvertStats",
		  costid: 'upgradeMadnessMinionsTwoBonusTwoCost',
		  minion: 'madnessMinionsTwo',
		  click: function () {upgradeIncreaseBase('upgradeMadnessMinionsTwoBonusTwo', .5, 0, 0, 0);},
		  costs: [(madnessCost({type: "madness", base: 250, current: 250}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsTwo'].current >= 10)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsTwoBonusOne'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsTwoBonusOne',
		  boughtdivid: 'boughtUpgradeMadnessMinionsTwoBonusOne',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Stronger Drink",
		  text: "The madness has taken its toll, and your sailors can start drinking and consequently telling their story more.",
		  stats: "Suspicious Sailors generate twice as much madness",
		  statsdiv: "madnessMinionsTwoConvertStats",
		  costid: 'upgradeMadnessMinionsTwoBonusOneCost',
		  minion: 'madnessMinionsTwo',
		  click: function() {upgradeDoubleBonus('upgradeMadnessMinionsTwoBonusOne')},
		  costs: [(madnessCost({type: "madness", base: 100, current: 100}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsTwo'].current >= 5)
			  return true;
			else
			  return false;
		  }
        }));
  
	// ------------------- MADNESS MINIONS 1 ------------------------------
  
	  unlockableMadnessDivs['madnessMinionsOneConvert'] = 
	    (madnessDiv({
          id: "madnessMinionsOneConvert",
		  tab: "madnessMadnessTab",
		  subtab: "madnessMadnessBuildingsSubTab",
		  type: "building",
		  title: "Crazy Homeless Person",
		  text: "The mad men with signs screaming about the end of the world won't do much to spread madness. " +
		  "But it will do some.",
		  statsdiv: "madnessMinionsOneConvertStats",
		  minion: "madnessMinionsOne",
		  costid: 'madnessMinionsOneConvertCost',
		  click: function () {
		    currMadness -= this.costs[0].current;
			madnessSpent += this.costs[0].current;
			this.timesClicked++;
			totalConvertClicks++;
			this.costCount++;
			calculateAndDisplayCost('madnessMinionsOneConvert');
			madnessMinions['madnessMinionsOne'].current++;
			madnessMinions['madnessMinionsOne'].allTime++;
			totalMinionsConverted++;
		  },
		  costs: [(madnessCost({type: "madness", base: 10, current: 10}))],
		  minionCosts: [],          
		  unlock: function () {
		    if (currMadness >= 5)
			  return true;
			else
			  return false;
		  }
        }));
		
		// unlock
 
	  unlockableMadnessDivs['upgradeMadnessUnlockMinionsTwo'] = 
	    (madnessDiv({
          id: 'upgradeMadnessUnlockMinionsTwo',
		  boughtdivid: 'boughtUpgradeMadnessUnlockMinionsTwo',
		  tab: "madnessMadnessTab",		  		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Awaken Mother Hydra",
		  text: "This dangerous ritual will awaken Mother Hydra and her brood of Deep Ones.",
		  stats: "Unlocks a new minion",
		  costid: 'upgradeMadnessUnlockMinionsTwoCost',
		  click: function () {
		    currMadness -= this.costs[0].current;
			madnessMinions['madnessMinionsOne'].current -= this.minionCosts[0].current;
		    this.timesClicked++;
		    this.costCount++;
		    totalUpgrades++;

			var key = 'madnessMinionsTwoConvert';
			visibleMadnessDivs[key] = madnessDiv(unlockableMadnessDivs[key]);
		    delete unlockableMadnessDivs[key];
		    document.getElementById(key).hidden = false;
			calculateAndDisplayCost(visibleMadnessDivs[key].id);
			displayAndLogMessage("You unlocked " + visibleMadnessDivs[key].title, visibleMadnessDivs[key].text);
			addNotifyTab('madnessMadnessTab');
			addNotifySubTab('madnessMadnessBuildingsSubTab');

			visibleMadnessDivs[this.id].type = "boughtupgrade";
			document.getElementById(this.id).hidden = true;		
			document.getElementById(this.boughtdivid).hidden = false;
			updateMadWorldDiv("Mother Hydra and her Deep Ones are awake");
		  },
		  costs: [(madnessCost({type: "madness", base: 250, current: 250}))],
		  minionCosts: [(madnessMinionCost({type: "madnessMinionsOne", base: 2, current: 2}))],
		  unlock: function () {
		    if (currMadness >= 125 && madnessMinions['madnessMinionsOne'].current >= 1)
			  return true;
			else
			  return false;
		  }
        }));
		
		// bonus upgrades
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsOneBonusFive'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsOneBonusFive',
		  boughtdivid: 'boughtUpgradeMadnessMinionsOneBonusFive',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Impossible Angles",
		  text: "The signs your homeless minions carry can now exist in unknown dimensions. No one can tell " +
		    "quite what is wrong with them and it weighs heavily on their minds.",
		  stats: "Crazy Homeless People generate twice as much madness",
		  statsdiv: "madnessMinionsOneConvertStats",
		  costid: 'upgradeMadnessMinionsOneBonusFiveCost',
		  minion: 'madnessMinionsOne',
		  click: function() {upgradeDoubleBonus('upgradeMadnessMinionsOneBonusFive')},
		  costs: [(madnessCost({type: "madness", base: 150000, current: 150000}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsOne'].current >= 100)
			  return true;
			else
			  return false;
		  }
        }));
		
	  unlockableMadnessDivs['upgradeMadnessMinionsOneBonusFour'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsOneBonusFour',
		  boughtdivid: 'boughtUpgradeMadnessMinionsOneBonusFour',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Speaking in Tongues",
		  text: "The language your homeless minions can speak is no longer human in origin. No one can understand what they " +
		    "are saying, but the dread and despair translates just fine.",
		  stats: "Crazy Homeless People generate .3 more base madness",
		  statsdiv: "madnessMinionsOneConvertStats",
		  costid: 'upgradeMadnessMinionsOneBonusFourCost',
		  minion: 'madnessMinionsOne',
		  click: function () {upgradeIncreaseBase('upgradeMadnessMinionsOneBonusFour', .3, 0, 0, 0)},
		  costs: [(madnessCost({type: "madness", base: 1500, current: 1500}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsOne'].current >= 50)
			  return true;
			else
			  return false;
		  }
        }));
		
	  unlockableMadnessDivs['upgradeMadnessMinionsOneBonusThree'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsOneBonusThree',
		  boughtdivid: 'boughtUpgradeMadnessMinionsOneBonusThree',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Eldritch Symbols",
		  text: "Your homeless minions have learned eldritch symbols. Adding them to their signs will make them twice as unnerving.",
		  stats: "Crazy Homeless People generate twice as much madness",
		  statsdiv: "madnessMinionsOneConvertStats",
		  costid: 'upgradeMadnessMinionsOneBonusThreeCost',
		  minion: 'madnessMinionsOne',
		  click: function() {upgradeDoubleBonus('upgradeMadnessMinionsOneBonusThree')},
		  costs: [(madnessCost({type: "madness", base: 150, current: 150}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsOne'].current >= 25)
			  return true;
			else
			  return false;
		  }
        }));
		
	  unlockableMadnessDivs['upgradeMadnessMinionsOneBonusTwo'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsOneBonusTwo',
		  boughtdivid: 'boughtUpgradeMadnessMinionsOneBonusTwo',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Louder Yelling",
		  text: "Your homeless minions are empowered by their madness to yell louder than ever before. Their madness " +
		    "will spread much more effectively.",
		  stats: "Crazy Homeless People generate .1 more base madness",
		  statsdiv: "madnessMinionsOneConvertStats",
		  costid: 'upgradeMadnessMinionsOneBonusTwoCost',
		  minion: 'madnessMinionsOne',
		  click: function () {upgradeIncreaseBase('upgradeMadnessMinionsOneBonusTwo', .1, 0, 0, 0);},
		  costs: [(madnessCost({type: "madness", base: 50, current: 50}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsOne'].current >= 10)
			  return true;
			else
			  return false;
		  }
        }));
	  
	  unlockableMadnessDivs['upgradeMadnessMinionsOneBonusOne'] = 
	    (madnessDiv({
          id: 'upgradeMadnessMinionsOneBonusOne',
		  boughtdivid: 'boughtUpgradeMadnessMinionsOneBonusOne',
		  tab: "madnessMadnessTab",		  
		  subtab: "madnessMadnessUpgradesSubTab",
		  type: "upgrade",
		  title: "Cryptic Scrawl",
		  text: "You homeless minions can start writing their signs in a mad cryptic scrawling style. Still legible but " +
		    "much more unsettling",
		  stats: "Crazy Homeless People generate twice as much madness",
		  statsdiv: "madnessMinionsOneConvertStats",
		  costid: 'upgradeMadnessMinionsOneBonusOneCost',
		  minion: 'madnessMinionsOne',
		  click: function() {upgradeDoubleBonus('upgradeMadnessMinionsOneBonusOne')},
		  costs: [(madnessCost({type: "madness", base: 25, current: 25}))],
		  minionCosts: [],
		  unlock: function () {
		    if (madnessMinions['madnessMinionsOne'].current >= 5)
			  return true;
			else
			  return false;
		  }
        }));
  
  
  
  return unlockableMadnessDivs;
}