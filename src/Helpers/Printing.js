export const PrintReceipt = (printer, receiptLinesArray) => {
  console.log("Sending data to printer", printer, receiptLinesArray);
  console.log(JSON.stringify(receiptLinesArray));

  function printReceiptEpson() {
    if (receiptLinesArray.length > 0) {
      if (printer === null) {
        console.log("Printer not connected");
      } else {
        printer.addTextSmooth(true);

        for (var i in receiptLinesArray) {
          switch (receiptLinesArray[i].align) {
            case "LEFT":
              printer.addTextAlign(printer.ALIGN_LEFT);
              break;
            case "CENTER":
              printer.addTextAlign(printer.ALIGN_CENTER);
              break;
            case "RIGHT":
              printer.addTextAlign(printer.ALIGN_RIGHT);
              break;
            default:
              printer.addTextAlign(printer.ALIGN_LEFT);
              break;
          }

          switch (receiptLinesArray[i].font) {
            case "A":
              printer.addTextFont(printer.FONT_A);
              break;
            case "B":
              printer.addTextFont(printer.FONT_B);
              break;
            default:
              printer.addTextFont(printer.FONT_A);
              break;
          }

          switch (receiptLinesArray[i].size) {
            case 1:
              //double width, double height
              printer.addTextDouble(true, true);
              break;
            case 2:
              //double width, normal height
              printer.addTextDouble(true, false);
              break;
            case 0:
              //normal width, normal height
              printer.addTextDouble(false, false);
              break;
            default:
              printer.addTextDouble(false, false);
              break;
          }

          //inversed (true|false), underscored (true|false), bold (true|false)
          printer.addTextStyle(
            receiptLinesArray[i].inverse,
            receiptLinesArray[i].underline,
            receiptLinesArray[i].bold,
            printer.COLOR_1
          );
          printer.addText(receiptLinesArray[i].text + "\n");

          switch (receiptLinesArray[i].linefeed) {
            case false:
              //do nothing
              break;
            case true:
              printer.addFeedLine(1);
              break;
            default:
              //do nothing
              break;
          }

          switch (receiptLinesArray[i].cut) {
            case false:
              //dont cut
              break;
            case true:
              printer.addCut(printer.CUT_FEED);
              break;
            default:
              //dont cut
              break;
          }

          switch (receiptLinesArray[i].send) {
            case false:
              //dont send
              break;
            case true:
              printer.send();
              break;
            default:
              //dont send
              break;
          }
        }
      }
    } else {
      //nothing to print
    }
  }

  printReceiptEpson();
};