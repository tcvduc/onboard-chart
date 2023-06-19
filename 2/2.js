(() => {
  const classes = {
    chartHalfCircle: "chartHalfCircle",
  };

  const strokeStyleHaftCirclePart1 = "#6d72ff";
  const strokeStyleHaftCirclePart2 = "#988ffa";
  const strokeStyleHaftCirclePart3 = "#57c4ff";
  const strokeStyleHaftCirclePart4 = "#37456c";
  const strokeStyleHaftCircleBackground = "#101936";

  /**
   *
   * @param {Number} min
   * @param {Number} max
   *
   */
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   *
   * @param {HTMLCanvasElement} chartHalfCircle
   */
  function handleChart(chartHalfCircle) {
    const context2d = chartHalfCircle.getContext("2d");

    const halfCirclePart1 = 50;
    const halfCirclePart2 = 25;
    const halfCirclePart3 = 10;
    const halfCirclePart4 = 15;

    // draw background
    {
      // parameter for background
      const xBackground = 150;
      const yBackground = 149;
      const radiusBackground = 140;
      const startAngleBackground = 0;
      const endAngleBackground = Math.PI;
      const counterclockwiseBackground = true;
      const arcParameterBackground = [
        xBackground,
        yBackground,
        radiusBackground,
        startAngleBackground,
        endAngleBackground,
        counterclockwiseBackground,
      ];

      context2d.beginPath();
      context2d.arc(...arcParameterBackground);
      context2d.stroke();

      context2d.lineWidth = 15;
      context2d.strokeStyle = strokeStyleHaftCircleBackground;
      context2d.stroke();
    }

    // draw part 1
    {
      // parameter for part 1
      const xPart1 = 150;
      const yPart1 = 149;
      const radiusPart1 = 140;

      const delta1 = halfCirclePart1 / 100;
      const startAnglePart1 = (1 + delta1) * Math.PI;
      const endAnglePart1 = 1 * Math.PI;

      const counterclockwisePart1 = true;
      const arcParameterPart1 = [
        xPart1,
        yPart1,
        radiusPart1,
        startAnglePart1,
        endAnglePart1,
        counterclockwisePart1,
      ];

      context2d.beginPath();
      context2d.arc(...arcParameterPart1);
      context2d.stroke();

      context2d.lineWidth = 15;
      context2d.strokeStyle = strokeStyleHaftCirclePart1;
      context2d.stroke();
    }

    // draw part 2
    {
      // parameter for part 2
      const xPart2 = 150;
      const yPart2 = 149;
      const radiusPart2 = 140;

      const delta1 = halfCirclePart1 / 100;
      const delta2 = halfCirclePart2 / 100;
      const startAnglePart2 = (1 + delta1 + delta2) * Math.PI;
      const endAnglePart2 = (1 + delta1) * Math.PI;

      const counterclockwisePart2 = true;
      const arcParameterPart2 = [
        xPart2,
        yPart2,
        radiusPart2,
        startAnglePart2,
        endAnglePart2,
        counterclockwisePart2,
      ];

      context2d.beginPath();
      context2d.arc(...arcParameterPart2);
      context2d.stroke();

      context2d.lineWidth = 15;
      context2d.strokeStyle = strokeStyleHaftCirclePart2;
      context2d.stroke();
    }

    // draw part 3
    {
      // parameter for part 3
      const xPart3 = 150;
      const yPart3 = 149;
      const radiusPart3 = 140;

      const delta1 = halfCirclePart1 / 100;
      const delta2 = halfCirclePart2 / 100;
      const delta3 = halfCirclePart3 / 100;

      const startAnglePart3 = (1 + delta1 + delta2 + delta3) * Math.PI;
      const endAnglePart3 = (1 + delta1 + delta2) * Math.PI;

      const counterclockwisePart3 = true;
      const arcParameterPart3 = [
        xPart3,
        yPart3,
        radiusPart3,
        startAnglePart3,
        endAnglePart3,
        counterclockwisePart3,
      ];

      context2d.beginPath();
      context2d.arc(...arcParameterPart3);
      context2d.stroke();

      context2d.lineWidth = 15;
      context2d.strokeStyle = strokeStyleHaftCirclePart3;
      context2d.stroke();
    }

    // draw part 4
    {
      // parameter for part 4
      const xPart4 = 150;
      const yPart4 = 149;
      const radiusPart4 = 140;

      const delta1 = halfCirclePart1 / 100;
      const delta2 = halfCirclePart2 / 100;
      const delta3 = halfCirclePart3 / 100;
      const delta4 = halfCirclePart4 / 100;

      const startAnglePart4 = (1 + delta1 + delta2 + delta3 + delta4) * Math.PI;
      const endAnglePart4 = (1 + delta1 + delta2 + delta3) * Math.PI;

      const counterclockwisePart4 = true;
      const arcParameterPart4 = [
        xPart4,
        yPart4,
        radiusPart4,
        startAnglePart4,
        endAnglePart4,
        counterclockwisePart4,
      ];

      context2d.beginPath();
      context2d.arc(...arcParameterPart4);
      context2d.stroke();

      context2d.lineWidth = 15;
      context2d.strokeStyle = strokeStyleHaftCirclePart4;
      context2d.stroke();
    }
  }

  function main() {
    const chartHalfCircle = window.document.getElementsByClassName(
      classes.chartHalfCircle
    )[0];

    handleChart(chartHalfCircle);
  }

  main();
})();
