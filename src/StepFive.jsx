import React, { useContext } from "react";
import axios from "axios";
import { FormContext } from "./context";
import { saveAs } from "file-saver";
import { Label } from "@radix-ui/react-label";
import myimage from "./images/roadtestevaluation.png"

const StepFive = () => {
  const { form, setForm } = useContext(FormContext);
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:8000/createPdf`, form) //create pdf next => get pdf
      .then((response) => {
        axios
          .get(`http://localhost:8000/fetchPdf`, { responseType: "blob" })
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: "application/pdf" });
            saveAs(pdfBlob, "InvoiceDocument.pdf");
            //clear all the files you want
          })
          .then(() => {
            axios.post("http://localhost:8000/sendPdf").then((response) => {
              console.log(response);
              alert(response.data);
            });
          });
      });
  };

  return (
    <form className="max-w-screen-md mx-auto text-center">
      <div>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              '\n      @import url(https://themes.googleusercontent.com/fonts/css?kit=fpjTOVmNbO4Lz34iLyptLUXza5VhXqVC6o75Eld_V98);\n      ol.lst-kix_list_3-1 {\n        list-style-type: none;\n      }\n      ol.lst-kix_list_3-2 {\n        list-style-type: none;\n      }\n      .lst-kix_list_3-1 > li {\n        counter-increment: lst-ctn-kix_list_3-1;\n      }\n      ol.lst-kix_list_3-3 {\n        list-style-type: none;\n      }\n      ol.lst-kix_list_3-4.start {\n        counter-reset: lst-ctn-kix_list_3-4 0;\n      }\n      ol.lst-kix_list_3-4 {\n        list-style-type: none;\n      }\n      .lst-kix_list_2-1 > li {\n        counter-increment: lst-ctn-kix_list_2-1;\n      }\n      ol.lst-kix_list_3-0 {\n        list-style-type: none;\n      }\n      .lst-kix_list_1-1 > li {\n        counter-increment: lst-ctn-kix_list_1-1;\n      }\n      ol.lst-kix_list_2-6.start {\n        counter-reset: lst-ctn-kix_list_2-6 0;\n      }\n      .lst-kix_list_3-0 > li:before {\n        content: "" counter(lst-ctn-kix_list_3-0, decimal) ". ";\n      }\n      ol.lst-kix_list_3-1.start {\n        counter-reset: lst-ctn-kix_list_3-1 0;\n      }\n      .lst-kix_list_3-1 > li:before {\n        content: "" counter(lst-ctn-kix_list_3-1, lower-latin) ". ";\n      }\n      .lst-kix_list_3-2 > li:before {\n        content: "" counter(lst-ctn-kix_list_3-2, lower-roman) ". ";\n      }\n      ol.lst-kix_list_1-8.start {\n        counter-reset: lst-ctn-kix_list_1-8 0;\n      }\n      ol.lst-kix_list_2-3.start {\n        counter-reset: lst-ctn-kix_list_2-3 0;\n      }\n      .lst-kix_list_3-5 > li:before {\n        content: "" counter(lst-ctn-kix_list_3-5, lower-roman) ". ";\n      }\n      .lst-kix_list_3-4 > li:before {\n        content: "" counter(lst-ctn-kix_list_3-4, lower-latin) ". ";\n      }\n      ol.lst-kix_list_1-5.start {\n        counter-reset: lst-ctn-kix_list_1-5 0;\n      }\n      .lst-kix_list_3-3 > li:before {\n        content: "" counter(lst-ctn-kix_list_3-3, decimal) ". ";\n      }\n      ol.lst-kix_list_3-5 {\n        list-style-type: none;\n      }\n      ol.lst-kix_list_3-6 {\n        list-style-type: none;\n      }\n      ol.lst-kix_list_3-7 {\n        list-style-type: none;\n      }\n      ol.lst-kix_list_3-8 {\n        list-style-type: none;\n      }\n      .lst-kix_list_3-8 > li:before {\n        content: "" counter(lst-ctn-kix_list_3-8, lower-roman) ". ";\n      }\n      .lst-kix_list_2-0 > li {\n        counter-increment: lst-ctn-kix_list_2-0;\n      }\n      .lst-kix_list_2-3 > li {\n        counter-increment: lst-ctn-kix_list_2-3;\n      }\n      .lst-kix_list_3-6 > li:before {\n        content: "" counter(lst-ctn-kix_list_3-6, decimal) ". ";\n      }\n      .lst-kix_list_3-7 > li:before {\n        content: "" counter(lst-ctn-kix_list_3-7, lower-latin) ". ";\n      }\n      .lst-kix_list_1-2 > li {\n        counter-increment: lst-ctn-kix_list_1-2;\n      }\n      ol.lst-kix_list_3-7.start {\n        counter-reset: lst-ctn-kix_list_3-7 0;\n      }\n      .lst-kix_list_3-2 > li {\n        counter-increment: lst-ctn-kix_list_3-2;\n      }\n      ol.lst-kix_list_2-2 {\n        list-style-type: none;\n      }\n      ol.lst-kix_list_2-3 {\n        list-style-type: none;\n      }\n      ol.lst-kix_list_2-4 {\n        list-style-type: none;\n      }\n      ol.lst-kix_list_2-5 {\n        list-style-type: none;\n      }\n      .lst-kix_list_1-4 > li {\n        counter-increment: lst-ctn-kix_list_1-4;\n      }\n      ol.lst-kix_list_2-0 {\n        list-style-type: none;\n      }\n      ol.lst-kix_list_1-6.start {\n        counter-reset: lst-ctn-kix_list_1-6 0;\n      }\n      ol.lst-kix_list_2-1 {\n        list-style-type: none;\n      }\n      ol.lst-kix_list_3-3.start {\n        counter-reset: lst-ctn-kix_list_3-3 0;\n      }\n      ol.lst-kix_list_2-6 {\n        list-style-type: none;\n      }\n      ol.lst-kix_list_2-7 {\n        list-style-type: none;\n      }\n      ol.lst-kix_list_2-8 {\n        list-style-type: none;\n      }\n      ol.lst-kix_list_1-0.start {\n        counter-reset: lst-ctn-kix_list_1-0 0;\n      }\n      .lst-kix_list_3-0 > li {\n        counter-increment: lst-ctn-kix_list_3-0;\n      }\n      .lst-kix_list_3-3 > li {\n        counter-increment: lst-ctn-kix_list_3-3;\n      }\n      .lst-kix_list_3-6 > li {\n        counter-increment: lst-ctn-kix_list_3-6;\n      }\n      .lst-kix_list_2-5 > li {\n        counter-increment: lst-ctn-kix_list_2-5;\n      }\n      .lst-kix_list_2-8 > li {\n        counter-increment: lst-ctn-kix_list_2-8;\n      }\n      ol.lst-kix_list_3-2.start {\n        counter-reset: lst-ctn-kix_list_3-2 0;\n      }\n      .lst-kix_list_2-2 > li {\n        counter-increment: lst-ctn-kix_list_2-2;\n      }\n      ol.lst-kix_list_2-4.start {\n        counter-reset: lst-ctn-kix_list_2-4 0;\n      }\n      ol.lst-kix_list_1-3 {\n        list-style-type: none;\n      }\n      ol.lst-kix_list_1-4 {\n        list-style-type: none;\n      }\n      .lst-kix_list_2-6 > li:before {\n        content: "" counter(lst-ctn-kix_list_2-6, decimal) ". ";\n      }\n      .lst-kix_list_2-7 > li:before {\n        content: "" counter(lst-ctn-kix_list_2-7, lower-latin) ". ";\n      }\n      .lst-kix_list_2-7 > li {\n        counter-increment: lst-ctn-kix_list_2-7;\n      }\n      .lst-kix_list_3-7 > li {\n        counter-increment: lst-ctn-kix_list_3-7;\n      }\n      ol.lst-kix_list_1-5 {\n        list-style-type: none;\n      }\n      ol.lst-kix_list_1-6 {\n        list-style-type: none;\n      }\n      ol.lst-kix_list_1-0 {\n        list-style-type: none;\n      }\n      .lst-kix_list_2-4 > li:before {\n        content: "" counter(lst-ctn-kix_list_2-4, lower-latin) ". ";\n      }\n      .lst-kix_list_2-5 > li:before {\n        content: "" counter(lst-ctn-kix_list_2-5, lower-roman) ". ";\n      }\n      .lst-kix_list_2-8 > li:before {\n        content: "" counter(lst-ctn-kix_list_2-8, lower-roman) ". ";\n      }\n      ol.lst-kix_list_1-1 {\n        list-style-type: none;\n      }\n      ol.lst-kix_list_1-2 {\n        list-style-type: none;\n      }\n      ol.lst-kix_list_3-0.start {\n        counter-reset: lst-ctn-kix_list_3-0 0;\n      }\n      ol.lst-kix_list_1-7 {\n        list-style-type: none;\n      }\n      .lst-kix_list_1-7 > li {\n        counter-increment: lst-ctn-kix_list_1-7;\n      }\n      ol.lst-kix_list_1-8 {\n        list-style-type: none;\n      }\n      ol.lst-kix_list_3-8.start {\n        counter-reset: lst-ctn-kix_list_3-8 0;\n      }\n      ol.lst-kix_list_2-5.start {\n        counter-reset: lst-ctn-kix_list_2-5 0;\n      }\n      li.li-bullet-1:before {\n        margin-left: -17.9pt;\n        white-space: nowrap;\n        display: inline-block;\n        min-width: 17.9pt;\n      }\n      .lst-kix_list_2-6 > li {\n        counter-increment: lst-ctn-kix_list_2-6;\n      }\n      .lst-kix_list_3-8 > li {\n        counter-increment: lst-ctn-kix_list_3-8;\n      }\n      ol.lst-kix_list_1-7.start {\n        counter-reset: lst-ctn-kix_list_1-7 0;\n      }\n      ol.lst-kix_list_2-2.start {\n        counter-reset: lst-ctn-kix_list_2-2 0;\n      }\n      .lst-kix_list_1-5 > li {\n        counter-increment: lst-ctn-kix_list_1-5;\n      }\n      .lst-kix_list_1-8 > li {\n        counter-increment: lst-ctn-kix_list_1-8;\n      }\n      ol.lst-kix_list_1-4.start {\n        counter-reset: lst-ctn-kix_list_1-4 0;\n      }\n      .lst-kix_list_3-5 > li {\n        counter-increment: lst-ctn-kix_list_3-5;\n      }\n      ol.lst-kix_list_1-1.start {\n        counter-reset: lst-ctn-kix_list_1-1 0;\n      }\n      .lst-kix_list_3-4 > li {\n        counter-increment: lst-ctn-kix_list_3-4;\n      }\n      .lst-kix_list_2-4 > li {\n        counter-increment: lst-ctn-kix_list_2-4;\n      }\n      ol.lst-kix_list_3-6.start {\n        counter-reset: lst-ctn-kix_list_3-6 0;\n      }\n      ol.lst-kix_list_1-3.start {\n        counter-reset: lst-ctn-kix_list_1-3 0;\n      }\n      ol.lst-kix_list_2-8.start {\n        counter-reset: lst-ctn-kix_list_2-8 0;\n      }\n      ol.lst-kix_list_1-2.start {\n        counter-reset: lst-ctn-kix_list_1-2 0;\n      }\n      .lst-kix_list_1-0 > li:before {\n        content: "" counter(lst-ctn-kix_list_1-0, decimal) ". ";\n      }\n      .lst-kix_list_1-1 > li:before {\n        content: "" counter(lst-ctn-kix_list_1-1, lower-latin) ". ";\n      }\n      .lst-kix_list_1-2 > li:before {\n        content: "" counter(lst-ctn-kix_list_1-2, lower-roman) ". ";\n      }\n      ol.lst-kix_list_2-0.start {\n        counter-reset: lst-ctn-kix_list_2-0 0;\n      }\n      .lst-kix_list_1-3 > li:before {\n        content: "" counter(lst-ctn-kix_list_1-3, decimal) ". ";\n      }\n      .lst-kix_list_1-4 > li:before {\n        content: "" counter(lst-ctn-kix_list_1-4, lower-latin) ". ";\n      }\n      ol.lst-kix_list_3-5.start {\n        counter-reset: lst-ctn-kix_list_3-5 0;\n      }\n      .lst-kix_list_1-0 > li {\n        counter-increment: lst-ctn-kix_list_1-0;\n      }\n      .lst-kix_list_1-6 > li {\n        counter-increment: lst-ctn-kix_list_1-6;\n      }\n      .lst-kix_list_1-7 > li:before {\n        content: "" counter(lst-ctn-kix_list_1-7, lower-latin) ". ";\n      }\n      ol.lst-kix_list_2-7.start {\n        counter-reset: lst-ctn-kix_list_2-7 0;\n      }\n      .lst-kix_list_1-3 > li {\n        counter-increment: lst-ctn-kix_list_1-3;\n      }\n      .lst-kix_list_1-5 > li:before {\n        content: "" counter(lst-ctn-kix_list_1-5, lower-roman) ". ";\n      }\n      .lst-kix_list_1-6 > li:before {\n        content: "" counter(lst-ctn-kix_list_1-6, decimal) ". ";\n      }\n      li.li-bullet-0:before {\n        margin-left: -18pt;\n        white-space: nowrap;\n        display: inline-block;\n        min-width: 18pt;\n      }\n      .lst-kix_list_2-0 > li:before {\n        content: "" counter(lst-ctn-kix_list_2-0, decimal) ". ";\n      }\n      .lst-kix_list_2-1 > li:before {\n        content: "" counter(lst-ctn-kix_list_2-1, lower-latin) ". ";\n      }\n      ol.lst-kix_list_2-1.start {\n        counter-reset: lst-ctn-kix_list_2-1 0;\n      }\n      .lst-kix_list_1-8 > li:before {\n        content: "" counter(lst-ctn-kix_list_1-8, lower-roman) ". ";\n      }\n      .lst-kix_list_2-2 > li:before {\n        content: "" counter(lst-ctn-kix_list_2-2, lower-roman) ". ";\n      }\n      .lst-kix_list_2-3 > li:before {\n        content: "" counter(lst-ctn-kix_list_2-3, decimal) ". ";\n      }\n      ol {\n        margin: 0;\n        padding: 0;\n      }\n      table td,\n      table th {\n        padding: 0;\n      }\n      .c22 {\n        border-right-style: solid;\n        padding: 0pt 5.4pt 0pt 5.4pt;\n        border-bottom-color: #000000;\n        border-top-width: 1pt;\n        border-right-width: 1pt;\n        border-left-color: #000000;\n        vertical-align: top;\n        border-right-color: #000000;\n        border-left-width: 1pt;\n        border-top-style: solid;\n        background-color: #d9d9d9;\n        border-left-style: solid;\n        border-bottom-width: 1pt;\n        width: 517pt;\n        border-top-color: #000000;\n        border-bottom-style: solid;\n      }\n      .c4 {\n        border-right-style: solid;\n        padding: 0pt 5.4pt 0pt 5.4pt;\n        border-bottom-color: #000000;\n        border-top-width: 1pt;\n        border-right-width: 1pt;\n        border-left-color: #000000;\n        vertical-align: top;\n        border-right-color: #000000;\n        border-left-width: 1pt;\n        border-top-style: solid;\n        background-color: #d9d9d9;\n        border-left-style: solid;\n        border-bottom-width: 1pt;\n        width: 78.5pt;\n        border-top-color: #000000;\n        border-bottom-style: solid;\n      }\n      .c10 {\n        border-right-style: solid;\n        padding: 0pt 5.4pt 0pt 5.4pt;\n        border-bottom-color: #000000;\n        border-top-width: 1pt;\n        border-right-width: 1pt;\n        border-left-color: #000000;\n        vertical-align: top;\n        border-right-color: #000000;\n        border-left-width: 1pt;\n        border-top-style: solid;\n        border-left-style: solid;\n        border-bottom-width: 1pt;\n        width: 55.9pt;\n        border-top-color: #000000;\n        border-bottom-style: solid;\n      }\n      .c19 {\n        border-right-style: solid;\n        padding: 0pt 5.4pt 0pt 5.4pt;\n        border-bottom-color: #000000;\n        border-top-width: 1pt;\n        border-right-width: 1pt;\n        border-left-color: #000000;\n        vertical-align: top;\n        border-right-color: #000000;\n        border-left-width: 1pt;\n        border-top-style: solid;\n        border-left-style: solid;\n        border-bottom-width: 1pt;\n        width: 390.8pt;\n        border-top-color: #000000;\n        border-bottom-style: solid;\n      }\n      .c17 {\n        border-right-style: solid;\n        padding: 0pt 5.4pt 0pt 5.4pt;\n        border-bottom-color: #000000;\n        border-top-width: 1pt;\n        border-right-width: 1pt;\n        border-left-color: #000000;\n        vertical-align: top;\n        border-right-color: #000000;\n        border-left-width: 1pt;\n        border-top-style: solid;\n        border-left-style: solid;\n        border-bottom-width: 1pt;\n        width: 205.6pt;\n        border-top-color: #000000;\n        border-bottom-style: solid;\n      }\n      .c33 {\n        border-right-style: solid;\n        padding: 0pt 5.4pt 0pt 5.4pt;\n        border-bottom-color: #000000;\n        border-top-width: 1pt;\n        border-right-width: 1pt;\n        border-left-color: #000000;\n        vertical-align: top;\n        border-right-color: #000000;\n        border-left-width: 1pt;\n        border-top-style: solid;\n        border-left-style: solid;\n        border-bottom-width: 1pt;\n        width: 78.2pt;\n        border-top-color: #000000;\n        border-bottom-style: solid;\n      }\n      .c13 {\n        border-right-style: solid;\n        padding: 0pt 5.4pt 0pt 5.4pt;\n        border-bottom-color: #000000;\n        border-top-width: 1pt;\n        border-right-width: 1pt;\n        border-left-color: #000000;\n        vertical-align: top;\n        border-right-color: #000000;\n        border-left-width: 1pt;\n        border-top-style: solid;\n        border-left-style: solid;\n        border-bottom-width: 1pt;\n        width: 63.8pt;\n        border-top-color: #000000;\n        border-bottom-style: solid;\n      }\n      .c35 {\n        border-right-style: solid;\n        padding: 0pt 5.4pt 0pt 5.4pt;\n        border-bottom-color: #000000;\n        border-top-width: 1pt;\n        border-right-width: 1pt;\n        border-left-color: #000000;\n        vertical-align: top;\n        border-right-color: #000000;\n        border-left-width: 1pt;\n        border-top-style: solid;\n        border-left-style: solid;\n        border-bottom-width: 1pt;\n        width: 78.5pt;\n        border-top-color: #000000;\n        border-bottom-style: solid;\n      }\n      .c11 {\n        -webkit-text-decoration-skip: none;\n        color: #000000;\n        font-weight: 700;\n        text-decoration: underline;\n        vertical-align: baseline;\n        text-decoration-skip-ink: none;\n        font-size: 20pt;\n        font-family: "Calibri";\n        font-style: normal;\n      }\n      .c7 {\n        margin-left: 36pt;\n        padding-top: 0pt;\n        padding-left: 0pt;\n        padding-bottom: 0pt;\n        line-height: 1;\n        orphans: 2;\n        widows: 2;\n        text-align: justify;\n        margin-right: 16.6pt;\n      }\n      .c5 {\n        color: #000000;\n        font-weight: 700;\n        text-decoration: none;\n        vertical-align: baseline;\n        font-size: 11pt;\n        font-family: "Calibri";\n        font-style: normal;\n      }\n      .c0 {\n        color: #000000;\n        font-weight: 400;\n        text-decoration: none;\n        vertical-align: baseline;\n        font-size: 10pt;\n        font-family: "Calibri";\n        font-style: normal;\n      }\n      .c29 {\n        color: #000000;\n        font-weight: 700;\n        text-decoration: none;\n        vertical-align: baseline;\n        font-size: 14pt;\n        font-family: "Calibri";\n        font-style: normal;\n      }\n      .c2 {\n        color: #000000;\n        font-weight: 400;\n        text-decoration: none;\n        vertical-align: baseline;\n        font-size: 11pt;\n        font-family: "Calibri";\n        font-style: normal;\n      }\n      .c18 {\n        color: #000000;\n        font-weight: 700;\n        text-decoration: none;\n        vertical-align: baseline;\n        font-size: 10pt;\n        font-family: "Calibri";\n        font-style: normal;\n      }\n      .c3 {\n        padding-top: 0pt;\n        padding-bottom: 0pt;\n        line-height: 1.5;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      .c24 {\n        padding-top: 0pt;\n        padding-bottom: 0pt;\n        line-height: 1;\n        orphans: 2;\n        widows: 2;\n        text-align: justify;\n      }\n      .c1 {\n        padding-top: 0pt;\n        padding-bottom: 0pt;\n        line-height: 1;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      .c30 {\n        padding-top: 0pt;\n        padding-bottom: 8pt;\n        line-height: 1.0791666666666666;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      .c39 {\n        padding-top: 0pt;\n        padding-bottom: 8pt;\n        line-height: 1.0791666666666666;\n        orphans: 2;\n        widows: 2;\n        text-align: center;\n      }\n      .c38 {\n        padding-top: 0pt;\n        padding-bottom: 0pt;\n        line-height: 1.0791666666666666;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      .c8 {\n        padding-top: 0pt;\n        padding-bottom: 0pt;\n        line-height: 1;\n        orphans: 2;\n        widows: 2;\n        text-align: center;\n      }\n      .c12 {\n        margin-left: 36pt;\n        border-spacing: 0;\n        border-collapse: collapse;\n        margin-right: auto;\n      }\n      .c32 {\n        border-spacing: 0;\n        border-collapse: collapse;\n        margin-right: auto;\n      }\n      .c26 {\n        margin-left: 34.2pt;\n        border-spacing: 0;\n        border-collapse: collapse;\n        margin-right: auto;\n      }\n      .c9 {\n        background-color: #ffffff;\n        max-width: 526.9pt;\n        padding: 28.4pt 42.5pt 28.4pt 42.5pt;\n      }\n      .c25 {\n        margin-left: 36pt;\n        padding-left: 0pt;\n      }\n      .c31 {\n        padding: 0;\n        margin: 0;\n      }\n      .c21 {\n        margin-left: 35.9pt;\n        padding-left: -0.1pt;\n      }\n      .c28 {\n        height: 146.2pt;\n      }\n      .c6 {\n        height: 11pt;\n      }\n      .c16 {\n        height: 16.4pt;\n      }\n      .c41 {\n        margin-right: 2.4pt;\n      }\n      .c23 {\n        text-indent: 18pt;\n      }\n      .c34 {\n        background-color: #d9d9d9;\n      }\n      .c15 {\n        margin-left: 108pt;\n      }\n      .c40 {\n        height: 14.4pt;\n      }\n      .c14 {\n        height: 15.5pt;\n      }\n      .c37 {\n        margin-left: 36pt;\n      }\n      .c36 {\n        margin-left: 180pt;\n      }\n      .c20 {\n        margin-left: 2.8pt;\n      }\n      .c27 {\n        height: 0pt;\n      }\n      .title {\n        padding-top: 0pt;\n        color: #000000;\n        font-size: 28pt;\n        padding-bottom: 0pt;\n        font-family: "Calibri";\n        line-height: 1;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      .subtitle {\n        padding-top: 18pt;\n        color: #666666;\n        font-size: 24pt;\n        padding-bottom: 4pt;\n        font-family: "Georgia";\n        line-height: 1.0791666666666666;\n        page-break-after: avoid;\n        font-style: italic;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      li {\n        color: #000000;\n        font-size: 11pt;\n        font-family: "Calibri";\n      }\n      p {\n        margin: 0;\n        color: #000000;\n        font-size: 11pt;\n        font-family: "Calibri";\n      }\n      h1 {\n        padding-top: 24pt;\n        color: #000000;\n        font-weight: 700;\n        font-size: 24pt;\n        padding-bottom: 6pt;\n        font-family: "Calibri";\n        line-height: 1.0791666666666666;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      h2 {\n        padding-top: 18pt;\n        color: #000000;\n        font-weight: 700;\n        font-size: 18pt;\n        padding-bottom: 4pt;\n        font-family: "Calibri";\n        line-height: 1.0791666666666666;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      h3 {\n        padding-top: 14pt;\n        color: #000000;\n        font-weight: 700;\n        font-size: 14pt;\n        padding-bottom: 4pt;\n        font-family: "Calibri";\n        line-height: 1.0791666666666666;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      h4 {\n        padding-top: 12pt;\n        color: #000000;\n        font-weight: 700;\n        font-size: 12pt;\n        padding-bottom: 2pt;\n        font-family: "Calibri";\n        line-height: 1.0791666666666666;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      h5 {\n        padding-top: 11pt;\n        color: #000000;\n        font-weight: 700;\n        font-size: 11pt;\n        padding-bottom: 2pt;\n        font-family: "Calibri";\n        line-height: 1.0791666666666666;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      h6 {\n        padding-top: 10pt;\n        color: #000000;\n        font-weight: 700;\n        font-size: 10pt;\n        padding-bottom: 2pt;\n        font-family: "Calibri";\n        line-height: 1.0791666666666666;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n    ',
          }}
        />
        <p className="c8 title">
          <span className="c11">EMPLOYMENT VERFICATION / REFERENCE CHECK</span>
        </p>
        <p className="c39">
          <span className="c2">(TO BE FILLED BY THE PREVIOUS EMPLOYER)</span>
        </p>
        <ol className="c31 lst-kix_list_2-0 start" start={1}>
          <li className="c25 c30 li-bullet-0">
            <span className="c0">
              The applicant named above was employed by us as ________________
              from ________ to &nbsp;__________.
            </span>
          </li>
          <li className="c1 c25 li-bullet-0">
            <span className="c0">
              Did he driver commercial motor vehicle for you?
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No
            </span>
            <span
              style={{
                overflow: "hidden",
                display: "inline-block",
                margin: "0px 0px",
                border: "0px solid #000000",
                transform: "rotate(0rad) translateZ(0px)",
                WebkitTransform: "rotate(0rad) translateZ(0px)",
                width: "14.33px",
                height: "13.33px",
              }}
            >
              <img
                alt=""
                src="images/image1.png"
                style={{
                  width: "14.33px",
                  height: "13.33px",
                  marginLeft: 0,
                  marginTop: 0,
                  transform: "rotate(0rad) translateZ(0px)",
                  WebkitTransform: "rotate(0rad) translateZ(0px)",
                }}
                title=""
              />
            </span>
            <span
              style={{
                overflow: "hidden",
                display: "inline-block",
                margin: "0px 0px",
                border: "0px solid #000000",
                transform: "rotate(0rad) translateZ(0px)",
                WebkitTransform: "rotate(0rad) translateZ(0px)",
                width: "14.33px",
                height: "13.33px",
              }}
            >
              <img
                alt=""
                src="images/image1.png"
                style={{
                  width: "14.33px",
                  height: "13.33px",
                  marginLeft: 0,
                  marginTop: 0,
                  transform: "rotate(0rad) translateZ(0px)",
                  WebkitTransform: "rotate(0rad) translateZ(0px)",
                }}
                title=""
              />
            </span>
          </li>
        </ol>
        <p className="c1 c23">
          <span className="c0">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;If Yes what type of
            vehicle&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tractor
            Semi-Trailer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dry Van
            Reefer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flatbed
            Trailer
          </span>
          <span
            style={{
              overflow: "hidden",
              display: "inline-block",
              margin: "0px 0px",
              border: "0px solid #000000",
              transform: "rotate(0rad) translateZ(0px)",
              WebkitTransform: "rotate(0rad) translateZ(0px)",
              width: "14.33px",
              height: "13.33px",
            }}
          >
            <img
              alt=""
              src="images/image1.png"
              style={{
                width: "14.33px",
                height: "13.33px",
                marginLeft: 0,
                marginTop: 0,
                transform: "rotate(0rad) translateZ(0px)",
                WebkitTransform: "rotate(0rad) translateZ(0px)",
              }}
              title=""
            />
          </span>
          <span
            style={{
              overflow: "hidden",
              display: "inline-block",
              margin: "0px 0px",
              border: "0px solid #000000",
              transform: "rotate(0rad) translateZ(0px)",
              WebkitTransform: "rotate(0rad) translateZ(0px)",
              width: "14.33px",
              height: "13.33px",
            }}
          >
            <img
              alt=""
              src="images/image1.png"
              style={{
                width: "14.33px",
                height: "13.33px",
                marginLeft: 0,
                marginTop: 0,
                transform: "rotate(0rad) translateZ(0px)",
                WebkitTransform: "rotate(0rad) translateZ(0px)",
              }}
              title=""
            />
          </span>
          <span
            style={{
              overflow: "hidden",
              display: "inline-block",
              margin: "0px 0px",
              border: "0px solid #000000",
              transform: "rotate(0rad) translateZ(0px)",
              WebkitTransform: "rotate(0rad) translateZ(0px)",
              width: "14.33px",
              height: "13.33px",
            }}
          >
            <img
              alt=""
              src="images/image1.png"
              style={{
                width: "14.33px",
                height: "13.33px",
                marginLeft: 0,
                marginTop: 0,
                transform: "rotate(0rad) translateZ(0px)",
                WebkitTransform: "rotate(0rad) translateZ(0px)",
              }}
              title=""
            />
          </span>
        </p>
        <p className="c3">
          <span className="c0">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tanker/Bulk&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dump
            Truck&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other
            _______
          </span>
          <span
            style={{
              overflow: "hidden",
              display: "inline-block",
              margin: "0px 0px",
              border: "0px solid #000000",
              transform: "rotate(0rad) translateZ(0px)",
              WebkitTransform: "rotate(0rad) translateZ(0px)",
              width: "14.33px",
              height: "13.33px",
            }}
          >
            <img
              alt=""
              src="images/image1.png"
              style={{
                width: "14.33px",
                height: "13.33px",
                marginLeft: 0,
                marginTop: 0,
                transform: "rotate(0rad) translateZ(0px)",
                WebkitTransform: "rotate(0rad) translateZ(0px)",
              }}
              title=""
            />
          </span>
          <span
            style={{
              overflow: "hidden",
              display: "inline-block",
              margin: "0px 0px",
              border: "0px solid #000000",
              transform: "rotate(0rad) translateZ(0px)",
              WebkitTransform: "rotate(0rad) translateZ(0px)",
              width: "14.33px",
              height: "13.33px",
            }}
          >
            <img
              alt=""
              src="images/image1.png"
              style={{
                width: "14.33px",
                height: "13.33px",
                marginLeft: 0,
                marginTop: 0,
                transform: "rotate(0rad) translateZ(0px)",
                WebkitTransform: "rotate(0rad) translateZ(0px)",
              }}
              title=""
            />
          </span>
          <span
            style={{
              overflow: "hidden",
              display: "inline-block",
              margin: "0px 0px",
              border: "0px solid #000000",
              transform: "rotate(0rad) translateZ(0px)",
              WebkitTransform: "rotate(0rad) translateZ(0px)",
              width: "14.33px",
              height: "13.33px",
            }}
          >
            <img
              alt=""
              src="images/image1.png"
              style={{
                width: "14.33px",
                height: "13.33px",
                marginLeft: 0,
                marginTop: 0,
                transform: "rotate(0rad) translateZ(0px)",
                WebkitTransform: "rotate(0rad) translateZ(0px)",
              }}
              title=""
            />
          </span>
        </p>
        <ol className="c31 lst-kix_list_2-0" start={3}>
          <li className="c21 c38 li-bullet-1">
            <span className="c0">
              How do you overall rate the applicant’s performance?
            </span>
          </li>
        </ol>
        <p className="c3 c36">
          <span className="c0">
            Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Average&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Poor
          </span>
          <span
            style={{
              overflow: "hidden",
              display: "inline-block",
              margin: "0px 0px",
              border: "0px solid #000000",
              transform: "rotate(0rad) translateZ(0px)",
              WebkitTransform: "rotate(0rad) translateZ(0px)",
              width: "14.33px",
              height: "13.33px",
            }}
          >
            <img
              alt=""
              src="images/image1.png"
              style={{
                width: "14.33px",
                height: "13.33px",
                marginLeft: 0,
                marginTop: 0,
                transform: "rotate(0rad) translateZ(0px)",
                WebkitTransform: "rotate(0rad) translateZ(0px)",
              }}
              title=""
            />
          </span>
          <span
            style={{
              overflow: "hidden",
              display: "inline-block",
              margin: "0px 0px",
              border: "0px solid #000000",
              transform: "rotate(0rad) translateZ(0px)",
              WebkitTransform: "rotate(0rad) translateZ(0px)",
              width: "14.33px",
              height: "13.33px",
            }}
          >
            <img
              alt=""
              src="images/image1.png"
              style={{
                width: "14.33px",
                height: "13.33px",
                marginLeft: 0,
                marginTop: 0,
                transform: "rotate(0rad) translateZ(0px)",
                WebkitTransform: "rotate(0rad) translateZ(0px)",
              }}
              title=""
            />
          </span>
          <span
            style={{
              overflow: "hidden",
              display: "inline-block",
              margin: "0px 0px",
              border: "0px solid #000000",
              transform: "rotate(0rad) translateZ(0px)",
              WebkitTransform: "rotate(0rad) translateZ(0px)",
              width: "14.33px",
              height: "13.33px",
            }}
          >
            <img
              alt=""
              src="images/image1.png"
              style={{
                width: "14.33px",
                height: "13.33px",
                marginLeft: 0,
                marginTop: 0,
                transform: "rotate(0rad) translateZ(0px)",
                WebkitTransform: "rotate(0rad) translateZ(0px)",
              }}
              title=""
            />
          </span>
        </p>
        <ol className="c31 lst-kix_list_2-0" start={4}>
          <li className="c1 c25 li-bullet-0">
            <span className="c0">Reason for Leaving the employment?</span>
          </li>
        </ol>
        <p className="c1 c36">
          <span className="c0">
            Resignation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Terminated&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Layoff
          </span>
          <span
            style={{
              overflow: "hidden",
              display: "inline-block",
              margin: "0px 0px",
              border: "0px solid #000000",
              transform: "rotate(0rad) translateZ(0px)",
              WebkitTransform: "rotate(0rad) translateZ(0px)",
              width: "14.33px",
              height: "13.33px",
            }}
          >
            <img
              alt=""
              src="images/image1.png"
              style={{
                width: "14.33px",
                height: "13.33px",
                marginLeft: 0,
                marginTop: 0,
                transform: "rotate(0rad) translateZ(0px)",
                WebkitTransform: "rotate(0rad) translateZ(0px)",
              }}
              title=""
            />
          </span>
          <span
            style={{
              overflow: "hidden",
              display: "inline-block",
              margin: "0px 0px",
              border: "0px solid #000000",
              transform: "rotate(0rad) translateZ(0px)",
              WebkitTransform: "rotate(0rad) translateZ(0px)",
              width: "14.33px",
              height: "13.33px",
            }}
          >
            <img
              alt=""
              src="images/image1.png"
              style={{
                width: "14.33px",
                height: "13.33px",
                marginLeft: 0,
                marginTop: 0,
                transform: "rotate(0rad) translateZ(0px)",
                WebkitTransform: "rotate(0rad) translateZ(0px)",
              }}
              title=""
            />
          </span>
          <span
            style={{
              overflow: "hidden",
              display: "inline-block",
              margin: "0px 0px",
              border: "0px solid #000000",
              transform: "rotate(0rad) translateZ(0px)",
              WebkitTransform: "rotate(0rad) translateZ(0px)",
              width: "14.33px",
              height: "13.33px",
            }}
          >
            <img
              alt=""
              src="images/image1.png"
              style={{
                width: "14.33px",
                height: "13.33px",
                marginLeft: 0,
                marginTop: 0,
                transform: "rotate(0rad) translateZ(0px)",
                WebkitTransform: "rotate(0rad) translateZ(0px)",
              }}
              title=""
            />
          </span>
        </p>
        <p className="c1 c6">
          <span className="c0" />
        </p>
        <ol className="c31 lst-kix_list_2-0" start={5}>
          <li className="c7 li-bullet-0">
            <span className="c0">
              Complete the following if the applicant was involved in any
              accident/incident which is on your accident register or was
              reported to government agencies or insurance:
            </span>
          </li>
        </ol>
        <a id="t.12a98f74a5707eb3ba83069c6245d64589782a67" />
        <a id="t.0" />
        <table className="c12">
          <tbody>
            <tr className="c27">
              <td className="c10 c34" colSpan={1} rowSpan={1}>
                <p className="c1">
                  <span className="c18">Date</span>
                </p>
              </td>
              <td className="c17 c34" colSpan={1} rowSpan={1}>
                <p className="c1">
                  <span className="c18">
                    Description of Accident/Incident &amp; Location
                  </span>
                </p>
              </td>
              <td className="c13 c34" colSpan={1} rowSpan={1}>
                <p className="c8">
                  <span className="c18">No. of Injuries</span>
                </p>
              </td>
              <td className="c13 c34" colSpan={1} rowSpan={1}>
                <p className="c8">
                  <span className="c18">No. of Fatalities</span>
                </p>
              </td>
              <td className="c4" colSpan={1} rowSpan={1}>
                <p className="c8">
                  <span className="c18">Hazmat Spill</span>
                </p>
              </td>
            </tr>
            <tr className="c40">
              <td className="c10" colSpan={1} rowSpan={1}>
                <p className="c3 c6">
                  <span className="c0" />
                </p>
              </td>
              <td className="c17" colSpan={1} rowSpan={1}>
                <p className="c3 c6">
                  <span className="c0" />
                </p>
              </td>
              <td className="c13" colSpan={1} rowSpan={1}>
                <p className="c3 c6">
                  <span className="c0" />
                </p>
              </td>
              <td className="c13" colSpan={1} rowSpan={1}>
                <p className="c3 c6">
                  <span className="c0" />
                </p>
              </td>
              <td className="c35" colSpan={1} rowSpan={1}>
                <p className="c3">
                  <span className="c0">
                    &nbsp; &nbsp; &nbsp;Yes &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    No
                  </span>
                  <span
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                      margin: "0px 0px",
                      border: "0px solid #000000",
                      transform: "rotate(0rad) translateZ(0px)",
                      WebkitTransform: "rotate(0rad) translateZ(0px)",
                      width: "12.67px",
                      height: 12,
                    }}
                  >
                    <img
                      alt=""
                      src="images/image2.png"
                      style={{
                        width: "12.67px",
                        height: 12,
                        marginLeft: 0,
                        marginTop: 0,
                        transform: "rotate(0rad) translateZ(0px)",
                        WebkitTransform: "rotate(0rad) translateZ(0px)",
                      }}
                      title=""
                    />
                  </span>
                  <span
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                      margin: "0px 0px",
                      border: "0px solid #000000",
                      transform: "rotate(0rad) translateZ(0px)",
                      WebkitTransform: "rotate(0rad) translateZ(0px)",
                      width: "12.67px",
                      height: 12,
                    }}
                  >
                    <img
                      alt=""
                      src="images/image2.png"
                      style={{
                        width: "12.67px",
                        height: 12,
                        marginLeft: 0,
                        marginTop: 0,
                        transform: "rotate(0rad) translateZ(0px)",
                        WebkitTransform: "rotate(0rad) translateZ(0px)",
                      }}
                      title=""
                    />
                  </span>
                </p>
              </td>
            </tr>
            <tr className="c27">
              <td className="c10" colSpan={1} rowSpan={1}>
                <p className="c3 c6">
                  <span className="c0" />
                </p>
              </td>
              <td className="c17" colSpan={1} rowSpan={1}>
                <p className="c3 c6">
                  <span className="c0" />
                </p>
              </td>
              <td className="c13" colSpan={1} rowSpan={1}>
                <p className="c3 c6">
                  <span className="c0" />
                </p>
              </td>
              <td className="c13" colSpan={1} rowSpan={1}>
                <p className="c3 c6">
                  <span className="c0" />
                </p>
              </td>
              <td className="c35" colSpan={1} rowSpan={1}>
                <p className="c3">
                  <span className="c0">
                    &nbsp; &nbsp; &nbsp;Yes &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    No
                  </span>
                  <span
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                      margin: "0px 0px",
                      border: "0px solid #000000",
                      transform: "rotate(0rad) translateZ(0px)",
                      WebkitTransform: "rotate(0rad) translateZ(0px)",
                      width: "12.67px",
                      height: 12,
                    }}
                  >
                    <img
                      alt=""
                      src="images/image2.png"
                      style={{
                        width: "12.67px",
                        height: 12,
                        marginLeft: 0,
                        marginTop: 0,
                        transform: "rotate(0rad) translateZ(0px)",
                        WebkitTransform: "rotate(0rad) translateZ(0px)",
                      }}
                      title=""
                    />
                  </span>
                  <span
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                      margin: "0px 0px",
                      border: "0px solid #000000",
                      transform: "rotate(0rad) translateZ(0px)",
                      WebkitTransform: "rotate(0rad) translateZ(0px)",
                      width: "12.67px",
                      height: 12,
                    }}
                  >
                    <img
                      alt=""
                      src="images/image2.png"
                      style={{
                        width: "12.67px",
                        height: 12,
                        marginLeft: 0,
                        marginTop: 0,
                        transform: "rotate(0rad) translateZ(0px)",
                        WebkitTransform: "rotate(0rad) translateZ(0px)",
                      }}
                      title=""
                    />
                  </span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="c1 c6 c37">
          <span className="c2" />
        </p>
        <ol className="c31 lst-kix_list_2-0" start={6}>
          <li className="c3 c21 li-bullet-1">
            <span className="c0">
              Any other remarks:
              ____________________________________________________________________
            </span>
          </li>
          <li className="c7 li-bullet-0">
            <span className="c0">
              Was applicant subject to FMCSR while employed and/or his job
              designated as a safety sensitive function in any DOT-regulated
              mode subject to the drug and alcohol testing requirements of 49
              CFR Part 40?
            </span>
          </li>
        </ol>
        <p className="c1 c15">
          <span className="c0">
            Yes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No
            &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(If yes, then
            please answer questions below)
          </span>
          <span
            style={{
              overflow: "hidden",
              display: "inline-block",
              margin: "0px 0px",
              border: "0px solid #000000",
              transform: "rotate(0rad) translateZ(0px)",
              WebkitTransform: "rotate(0rad) translateZ(0px)",
              width: "14.33px",
              height: "13.33px",
            }}
          >
            <img
              alt=""
              src="images/image1.png"
              style={{
                width: "14.33px",
                height: "13.33px",
                marginLeft: 0,
                marginTop: 0,
                transform: "rotate(0rad) translateZ(0px)",
                WebkitTransform: "rotate(0rad) translateZ(0px)",
              }}
              title=""
            />
          </span>
          <span
            style={{
              overflow: "hidden",
              display: "inline-block",
              margin: "0px 0px",
              border: "0px solid #000000",
              transform: "rotate(0rad) translateZ(0px)",
              WebkitTransform: "rotate(0rad) translateZ(0px)",
              width: "14.33px",
              height: "13.33px",
            }}
          >
            <img
              alt=""
              src="images/image1.png"
              style={{
                width: "14.33px",
                height: "13.33px",
                marginLeft: 0,
                marginTop: 0,
                transform: "rotate(0rad) translateZ(0px)",
                WebkitTransform: "rotate(0rad) translateZ(0px)",
              }}
              title=""
            />
          </span>
        </p>
        <p className="c1">
          <span className="c2">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </p>
        <a id="t.71a2b2e17c8407dc404de25b97cb6caad5aa7a53" />
        <a id="t.1" />
        <table className="c26">
          <tbody>
            <tr className="c16">
              <td className="c19" colSpan={1} rowSpan={1}>
                <p className="c1 c20">
                  <span className="c0">
                    Has this person had an alcohol test with the result of 0.04
                    or higher alcohol concentration?
                  </span>
                </p>
              </td>
              <td className="c33" colSpan={1} rowSpan={1}>
                <p className="c1">
                  <span className="c0">
                    &nbsp; &nbsp; &nbsp;Yes &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    No
                  </span>
                  <span
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                      margin: "0px 0px",
                      border: "0px solid #000000",
                      transform: "rotate(0rad) translateZ(0px)",
                      WebkitTransform: "rotate(0rad) translateZ(0px)",
                      width: "12.67px",
                      height: 12,
                    }}
                  >
                    <img
                      alt=""
                      src="images/image2.png"
                      style={{
                        width: "12.67px",
                        height: 12,
                        marginLeft: 0,
                        marginTop: 0,
                        transform: "rotate(0rad) translateZ(0px)",
                        WebkitTransform: "rotate(0rad) translateZ(0px)",
                      }}
                      title=""
                    />
                  </span>
                  <span
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                      margin: "0px 0px",
                      border: "0px solid #000000",
                      transform: "rotate(0rad) translateZ(0px)",
                      WebkitTransform: "rotate(0rad) translateZ(0px)",
                      width: "12.67px",
                      height: 12,
                    }}
                  >
                    <img
                      alt=""
                      src="images/image2.png"
                      style={{
                        width: "12.67px",
                        height: 12,
                        marginLeft: 0,
                        marginTop: 0,
                        transform: "rotate(0rad) translateZ(0px)",
                        WebkitTransform: "rotate(0rad) translateZ(0px)",
                      }}
                      title=""
                    />
                  </span>
                  <span
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                      margin: "0px 0px",
                      border: "0px solid #000000",
                      transform: "rotate(0rad) translateZ(0px)",
                      WebkitTransform: "rotate(0rad) translateZ(0px)",
                      width: "12.67px",
                      height: 12,
                    }}
                  >
                    <img
                      alt=""
                      src="images/image2.png"
                      style={{
                        width: "12.67px",
                        height: 12,
                        marginLeft: 0,
                        marginTop: 0,
                        transform: "rotate(0rad) translateZ(0px)",
                        WebkitTransform: "rotate(0rad) translateZ(0px)",
                      }}
                      title=""
                    />
                  </span>
                  <span
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                      margin: "0px 0px",
                      border: "0px solid #000000",
                      transform: "rotate(0rad) translateZ(0px)",
                      WebkitTransform: "rotate(0rad) translateZ(0px)",
                      width: "12.67px",
                      height: 12,
                    }}
                  >
                    <img
                      alt=""
                      src="images/image2.png"
                      style={{
                        width: "12.67px",
                        height: 12,
                        marginLeft: 0,
                        marginTop: 0,
                        transform: "rotate(0rad) translateZ(0px)",
                        WebkitTransform: "rotate(0rad) translateZ(0px)",
                      }}
                      title=""
                    />
                  </span>
                  <span
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                      margin: "0px 0px",
                      border: "0px solid #000000",
                      transform: "rotate(0rad) translateZ(0px)",
                      WebkitTransform: "rotate(0rad) translateZ(0px)",
                      width: "12.67px",
                      height: 12,
                    }}
                  >
                    <img
                      alt=""
                      src="images/image2.png"
                      style={{
                        width: "12.67px",
                        height: 12,
                        marginLeft: 0,
                        marginTop: 0,
                        transform: "rotate(0rad) translateZ(0px)",
                        WebkitTransform: "rotate(0rad) translateZ(0px)",
                      }}
                      title=""
                    />
                  </span>
                </p>
              </td>
            </tr>
            <tr className="c14">
              <td className="c19" colSpan={1} rowSpan={1}>
                <p className="c1 c20">
                  <span className="c0">
                    This person tested positive or adulterated or substituted a
                    test specimen for controlled substances?
                  </span>
                </p>
              </td>
              <td className="c33" colSpan={1} rowSpan={1}>
                <p className="c1">
                  <span className="c0">
                    &nbsp; &nbsp; &nbsp;Yes &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    No
                  </span>
                  <span
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                      margin: "0px 0px",
                      border: "0px solid #000000",
                      transform: "rotate(0rad) translateZ(0px)",
                      WebkitTransform: "rotate(0rad) translateZ(0px)",
                      width: "12.67px",
                      height: 12,
                    }}
                  >
                    <img
                      alt=""
                      src="images/image2.png"
                      style={{
                        width: "12.67px",
                        height: 12,
                        marginLeft: 0,
                        marginTop: 0,
                        transform: "rotate(0rad) translateZ(0px)",
                        WebkitTransform: "rotate(0rad) translateZ(0px)",
                      }}
                      title=""
                    />
                  </span>
                </p>
              </td>
            </tr>
            <tr className="c14">
              <td className="c19" colSpan={1} rowSpan={1}>
                <p className="c1 c20">
                  <span className="c0">
                    Has this person refused to submit to a post-accident,
                    random, reasonable suspension, or follow-up alcohol or
                    controlled substance test?
                  </span>
                </p>
              </td>
              <td className="c33" colSpan={1} rowSpan={1}>
                <p className="c1">
                  <span className="c0">
                    &nbsp; &nbsp; &nbsp;Yes &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    No
                  </span>
                  <span
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                      margin: "0px 0px",
                      border: "0px solid #000000",
                      transform: "rotate(0rad) translateZ(0px)",
                      WebkitTransform: "rotate(0rad) translateZ(0px)",
                      width: "12.67px",
                      height: 12,
                    }}
                  >
                    <img
                      alt=""
                      src="images/image2.png"
                      style={{
                        width: "12.67px",
                        height: 12,
                        marginLeft: 0,
                        marginTop: 0,
                        transform: "rotate(0rad) translateZ(0px)",
                        WebkitTransform: "rotate(0rad) translateZ(0px)",
                      }}
                      title=""
                    />
                  </span>
                  <span
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                      margin: "0px 0px",
                      border: "0px solid #000000",
                      transform: "rotate(0rad) translateZ(0px)",
                      WebkitTransform: "rotate(0rad) translateZ(0px)",
                      width: "12.67px",
                      height: 12,
                    }}
                  >
                    <img
                      alt=""
                      src="images/image2.png"
                      style={{
                        width: "12.67px",
                        height: 12,
                        marginLeft: 0,
                        marginTop: 0,
                        transform: "rotate(0rad) translateZ(0px)",
                        WebkitTransform: "rotate(0rad) translateZ(0px)",
                      }}
                      title=""
                    />
                  </span>
                </p>
              </td>
            </tr>
            <tr className="c14">
              <td className="c19" colSpan={1} rowSpan={1}>
                <p className="c1 c20">
                  <span className="c0">
                    Has this person committed other violations of subpart B of
                    Part 382, or Part 40?
                  </span>
                </p>
              </td>
              <td className="c33" colSpan={1} rowSpan={1}>
                <p className="c1">
                  <span className="c0">
                    &nbsp; &nbsp; &nbsp;Yes &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    No
                  </span>
                  <span
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                      margin: "0px 0px",
                      border: "0px solid #000000",
                      transform: "rotate(0rad) translateZ(0px)",
                      WebkitTransform: "rotate(0rad) translateZ(0px)",
                      width: "12.67px",
                      height: 12,
                    }}
                  >
                    <img
                      alt=""
                      src="images/image2.png"
                      style={{
                        width: "12.67px",
                        height: 12,
                        marginLeft: 0,
                        marginTop: 0,
                        transform: "rotate(0rad) translateZ(0px)",
                        WebkitTransform: "rotate(0rad) translateZ(0px)",
                      }}
                      title=""
                    />
                  </span>
                  <span
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                      margin: "0px 0px",
                      border: "0px solid #000000",
                      transform: "rotate(0rad) translateZ(0px)",
                      WebkitTransform: "rotate(0rad) translateZ(0px)",
                      width: "12.67px",
                      height: 12,
                    }}
                  >
                    <img
                      alt=""
                      src="images/image2.png"
                      style={{
                        width: "12.67px",
                        height: 12,
                        marginLeft: 0,
                        marginTop: 0,
                        transform: "rotate(0rad) translateZ(0px)",
                        WebkitTransform: "rotate(0rad) translateZ(0px)",
                      }}
                      title=""
                    />
                  </span>
                </p>
              </td>
            </tr>
            <tr className="c14">
              <td className="c19" colSpan={1} rowSpan={1}>
                <p className="c1 c20">
                  <span className="c0">
                    If this person has violated a DOT drug and alcohol
                    regulation, did this person complete a SAP-prescribed
                    rehabilitation program in your employ, including
                    return-to-duty and follow-up tests? If Yes, please send
                    documentation back with this form.
                  </span>
                </p>
              </td>
              <td className="c33" colSpan={1} rowSpan={1}>
                <p className="c1">
                  <span className="c0">
                    &nbsp; &nbsp; &nbsp;Yes &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    No
                  </span>
                  <span
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                      margin: "0px 0px",
                      border: "0px solid #000000",
                      transform: "rotate(0rad) translateZ(0px)",
                      WebkitTransform: "rotate(0rad) translateZ(0px)",
                      width: "12.67px",
                      height: 12,
                    }}
                  >
                    <img
                      alt=""
                      src="images/image2.png"
                      style={{
                        width: "12.67px",
                        height: 12,
                        marginLeft: 0,
                        marginTop: 0,
                        transform: "rotate(0rad) translateZ(0px)",
                        WebkitTransform: "rotate(0rad) translateZ(0px)",
                      }}
                      title=""
                    />
                  </span>
                </p>
              </td>
            </tr>
            <tr className="c14">
              <td className="c19" colSpan={1} rowSpan={1}>
                <p className="c1 c20">
                  <span className="c0">
                    For a driver who successfully completed a SAP’s
                    rehabilitation referral and remained in your employ, did
                    this driver subsequently have an alcohol test result of 0.04
                    or greater, a verified positive drug test, or refuse to be
                    tested?
                  </span>
                </p>
              </td>
              <td className="c33" colSpan={1} rowSpan={1}>
                <p className="c1">
                  <span className="c0">
                    &nbsp; &nbsp; &nbsp;Yes &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    No
                  </span>
                  <span
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                      margin: "0px 0px",
                      border: "0px solid #000000",
                      transform: "rotate(0rad) translateZ(0px)",
                      WebkitTransform: "rotate(0rad) translateZ(0px)",
                      width: "12.67px",
                      height: 12,
                    }}
                  >
                    <img
                      alt=""
                      src="images/image2.png"
                      style={{
                        width: "12.67px",
                        height: 12,
                        marginLeft: 0,
                        marginTop: 0,
                        transform: "rotate(0rad) translateZ(0px)",
                        WebkitTransform: "rotate(0rad) translateZ(0px)",
                      }}
                      title=""
                    />
                  </span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="c1 c6">
          <span className="c2" />
        </p>
        <p className="c1">
          <span className="c18">The above information is provided by:</span>
        </p>
        <p className="c1 c6">
          <span className="c0" />
        </p>
        <p className="c1 c41">
          <span className="c18">
            Name: ________________________ Designation: _______________________
            &nbsp;Signature&amp; Date: ________________________
          </span>
        </p>
        <p className="c1 c6">
          <span className="c5" />
        </p>
        <a id="t.39dd9fca3b60d6087697aba7c4afade29b33e889" />
        <a id="t.2" />
        <table className="c32">
          <tbody>
            <tr className="c28">
              <td className="c22" colSpan={1} rowSpan={1}>
                <p className="c8">
                  <span className="c29">APPLICANT’S CONSENT</span>
                </p>
                <p className="c3">
                  <span className="c2">Applicant’s</span>
                  <span className="c2">&nbsp;</span>
                  <span className="c2">Full Name</span>
                  <span className="c2">
                    : ___________________________________
                  </span>
                </p>
                <p className="c3">
                  <span className="c2">
                    Driver License # ____________________________ &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp;Date of Birth: ____________________
                  </span>
                </p>
                <p className="c24">
                  <span className="c0">
                    I hereby give my consent and authorize my prospect employer
                    ________________________________ and/or{" "}
                  </span>
                  <span className="c18">Primez Trucking Services Inc.</span>
                  <span className="c0">
                    &nbsp;to contact my previous employer(s) in order to verify
                    my Employment History, Safety Performance History and Drug
                    &amp; Alcohol History and to obtain the following
                    information. I release my prospective and previous
                    employer(s) and its employee(s) from any and all liabilities
                    which may result from furnishing such information.
                  </span>
                </p>
                <p className="c1 c6">
                  <span className="c2" />
                </p>
                <p className="c1">
                  <span className="c2">
                    Applicant’s Signature ________________________________
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Date:
                    _______________________
                  </span>
                </p>
                <p className="c1 c6">
                  <span className="c2" />
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="c8 c6">
          <span className="c29" />
        </p>
      </div>

      
      <div className="">
        <div className="sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Signature
          </label>
          <div className="mt-2">
            <input
              required
              type="text"
              name="signature"
              id="signature"
              autoComplete="signature"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        
      </div>
                       
      <button
        onClick={onSubmit}
        type="submit"
        className="box-border w-full text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]"
      >
        Submit
      </button>
      {console.log(form)}
    </form>
  );
};

export default StepFive;
