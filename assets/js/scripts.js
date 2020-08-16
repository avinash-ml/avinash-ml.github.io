//= require typed
//= require animatedModal
//= require dimple.v2.3.0
//= require parsley

$(document).ready(function () {
  // Content:
  // - Typed.js Intro
  // - Scroll to top
  // - Animated Modals
  // - D3/Dimple charts

  // Typed Intro
  $(function () {
    $("#typed-intro").typed({
      stringsElement: document.getElementById("typed-strings"),
      startDelay: 2000,
      typeSpeed: 0,
      callback: function () {
        $(".typed-cursor").hide();
        introEnd();
      },
    });
  });

  function introEnd() {
    Typed.new("#intro-end", {
      strings: [
        "<ul><li>MachineLearning</li><li>Deep Learning.</li><li>understand and visualizing data.</li></ul>^100</br> Click on the skills icon for my technology stack.",
      ],
      backDelay: 1500,
      typeSpeed: 0,
      backSpeed: 0,
      callback: function () {
        $(".hm-item").addClass("animated pulse");
      },
    });
  }

  // Scroll to top
  $(".back-to-top i").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      2000
    );
  });

  // Animated Modals
  $("#skillsAn").animatedModal({
    modalTarget: "skillsModal",
    color: "#202020",
    animatedIn: "slideInDown",
    animatedOut: "slideOutUp",
    overflow: "hidden",
    afterOpen: function () {
      $("#skillsModal").css("transform", "initial");
    },
    afterClose: function () {
      $("body").removeAttr("style");
    },
  });

  $("#contactAn").animatedModal({
    modalTarget: "contactModal",
    color: "#202020",
    animatedIn: "slideInDown",
    animatedOut: "slideOutUp",
    overflow: "hidden",
    afterOpen: function () {
      $("#contactModal").css("transform", "initial");
    },
    afterClose: function () {
      $("body").removeAttr("style");
    },
  });

  //D3/Dimple charts
  // Resetting Modals
  $(".modal-content").removeAttr("style");

  var svg = dimple.newSvg("#skillchart-container", "100%", "100%");

  d3.select("html").style("height", "100%").style("overflow", "hidden");
  d3.select("body").style("height", "100%").style("overflow", "hidden");

  // // Skill Set #1
  var data = [
    { Skill: "MachineLearning", Level: 9 },
    { Skill: "DeepLearning", Level: 7 },
    { Skill: "Statistics", Level: 7 },
    { Skill: "ComputerVision", Level: 8 },
    { Skill: "NLP", Level: 7 },
    { Skill: "Pandas", Level: 8 },
    { Skill: "Scikit-learn", Level: 8 },
    { Skill: "Data-Visualization", Level: 8 },
    { Skill: "Data-preprocessing", Level: 9 },
  ];

  var myChart = new dimple.chart(svg, data);
  myChart.setMargins("40px", "40px", "30px", "90px");

  //Set default colour
  myChart.defaultColors = [new dimple.color("#00b894")];

  // myChart.setBounds(60, 30, 510, 305)
  var x = myChart.addCategoryAxis("x", "Skill");
  x.addOrderRule([
    "MachineLearning",
    "DeepLearning",
    "ComputerVision",
    "Statistics",
    "Data-Visualization",
    "NLP",
  ]); //Set order

  var y = myChart.addMeasureAxis("y", "Level");
  y.overrideMin = 0;
  y.overrideMax = 10;

  myChart.addSeries(null, dimple.plot.bar);

  myChart.draw();

  window.onresize = function () {
    myChart.draw(0, true);
  };

  $("input[name='skillSelect']:radio").on("change", function () {
    if (this.value == "radioSE") {
      //Ugly hack to redraw chart
      d3.select("svg").remove();

      var svg = dimple.newSvg("#skillchart-container", "100%", "100%");

      d3.select("html").style("height", "100%").style("overflow", "hidden");
      d3.select("body").style("height", "100%").style("overflow", "hidden");

      // // Skill Set #2
      var data = [
        { Skill: "Python", Level: 8 },
        { Skill: "R", Level: 6 },
        { Skill: "SQL", Level: 8 },
        { Skill: "Unix", Level: 7 },
        { Skill: "Javascript", Level: 6 },
        { Skill: "ETL", Level: 7 },
        { Skill: "TensorFlow", Level: 8 },
        { Skill: "Pytorch", Level: 7 },
        { Skill: "ReGex", Level: 8 }
      ];

      var myChart = new dimple.chart(svg, data);
      myChart.setMargins("40px", "40px", "30px", "90px");

      //Set default colour
      myChart.defaultColors = [new dimple.color("#6F1E51")];

      // myChart.setBounds(60, 30, 510, 305)
      var x = myChart.addCategoryAxis("x", "Skill");
      x.addOrderRule([
        "Python",
        "R",
        "SQL",
        "Unix",
        "Javascript",
        "TensorFlow",
        "Pytorch",
        "ETL",
      ]); //Set order
      var y = myChart.addMeasureAxis("y", "Level");
      y.overrideMin = 0;
      y.overrideMax = 10;
      myChart.addSeries(null, dimple.plot.bar);
      myChart.draw(1000);
    } else {
      //Ugly hack to redraw chart
      d3.select("svg").remove();

      var svg = dimple.newSvg("#skillchart-container", "100%", "100%");

      d3.select("html").style("height", "100%").style("overflow", "hidden");
      d3.select("body").style("height", "100%").style("overflow", "hidden");

      // // Skill Set #1
      var data = [
        { Skill: "MachineLearning", Level: 9 },
        { Skill: "DeepLearning", Level: 7 },
        { Skill: "Statistics", Level: 7 },
        { Skill: "ComputerVision", Level: 8 },
        { Skill: "NLP", Level: 7 },
        { Skill: "Pandas", Level: 8 },
        { Skill: "Scikit-learn", Level: 8 },
        { Skill: "Data-Visualization", Level: 8 },
        { Skill: "Data-preprocessing", Level: 9 },
      ];

      var myChart = new dimple.chart(svg, data);
      myChart.setMargins("40px", "40px", "30px", "90px");

      //Set default colour
      myChart.defaultColors = [new dimple.color("#00b894")];

      // myChart.setBounds(60, 30, 510, 305)
      var x = myChart.addCategoryAxis("x", "Skill");
      x.addOrderRule([
        "MachineLearning",
        "DeepLearning",
        "ComputerVision",
        "Statistics",
        "Data-Visualization",
        "NLP",
      ]); //Set order
      var y = myChart.addMeasureAxis("y", "Level");
      y.overrideMin = 0;
      y.overrideMax = 10;
      myChart.addSeries(null, dimple.plot.bar);
      myChart.draw(1000);
    }
  });

  // Skip Intro
  // $('#hello-world').click(function() {
  //   // Hiding the typedjs intro content
  //   $('#typed-intro').hide();
  //   $('#intro-end').hide();
  //   $(".typed-cursor").hide();

  //   //Displaying standard content
  //   // $('#skipped-intro').show();
  //   $('.hm-item').addClass('animated pulse');
  // });
});
