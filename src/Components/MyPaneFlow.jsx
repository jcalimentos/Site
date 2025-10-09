"use client";
import { useEffect, useRef } from "react";
import PaneFlow from "./paneflow";
import "./paneflow.css";
import "./MyPaneFlow.css";

export default function MyPaneFlow() {
  const paneFlowElRef = useRef(null);
  const paneFlowInstanceRef = useRef(null);

  useEffect(() => {
    if (paneFlowElRef.current) {
      paneFlowInstanceRef.current = new PaneFlow({
        el: paneFlowElRef.current,
        padding: "2cqw",
        gap: "2cqw",
        transitionDuration: 1000,
        blockDelay: 50,
        blockBorderRadius: "0cqw",
        initialPaneIndex: 0,
        autoplay: { enabled: true, interval: 4000 },
        pagination: { enabled: true, clickable: true, type: "bullets" },
        panes: [
          {
            cols: 3,
            rows: 2,
            blocks: [
              {
                el: ".paneflow-block-bYSRTd",
                col: 0,
                row: 0,
                widthCols: 1,
                heightRows: 1,
                children: [
                  {
                    el: ".paneflow-item-9I1TMs",
                    translateX: "10.4cqw",
                    translateY: "6.8cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 3.06,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                ],
                enterFrom: "right",
                exitTo: "left",
              },
              {
                el: ".paneflow-block-swKOSH",
                col: 1,
                row: 0,
                widthCols: 1,
                heightRows: 1,
                children: [
                  {
                    el: ".paneflow-item-doyDx6",
                    translateX: "10.1cqw",
                    translateY: "3.9cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 3.45,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                ],
                enterFrom: "right",
                exitTo: "left",
              },
              {
                el: ".paneflow-block-lLDAa3",
                col: 2,
                row: 0,
                widthCols: 1,
                heightRows: 1,
                children: [
                  {
                    el: ".paneflow-item-omiiw6",
                    translateX: "9.7cqw",
                    translateY: "4.1cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 3.23,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                ],
                enterFrom: "right",
                exitTo: "left",
              },
              {
                el: ".paneflow-block-xvmHDf",
                col: 0,
                row: 1,
                widthCols: 1,
                heightRows: 1,
                children: [
                  {
                    el: ".paneflow-item-A36PhO",
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                  },
                  {
                    el: ".paneflow-item-m0prHo",
                    translateX: "46.9cqw",
                    translateY: "-177.3cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                  {
                    el: ".paneflow-item-Uu7iK8",
                    translateX: "268.1cqw",
                    translateY: "18.6cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                  {
                    el: ".paneflow-item-eRhVjj",
                    translateX: "210.8cqw",
                    translateY: "135.8cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 0.51,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                ],
                enterFrom: "bottom-left",
                exitTo: "bottom-left",
              },
              {
                el: ".paneflow-block-Ak5Jts",
                col: 1,
                row: 1,
                widthCols: 1,
                heightRows: 1,
                children: [
                  {
                    el: ".paneflow-item-nyG95x",
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                  },
                ],
                enterFrom: "bottom",
                exitTo: "bottom",
              },
              {
                el: ".paneflow-block-v12cRX",
                col: 2,
                row: 1,
                widthCols: 1,
                heightRows: 1,
                children: [
                  {
                    el: ".paneflow-item-eVgPrm",
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                  },
                ],
                enterFrom: "bottom-right",
                exitTo: "bottom-right",
              },
            ],
            autoplayInternal: 0,
          },
          {
            cols: 1,
            rows: 1,
            blocks: [
              {
                el: ".paneflow-block-cecCQP",
                col: 0,
                row: 0,
                widthCols: 1,
                heightRows: 1,
                children: [
                  {
                    el: ".paneflow-item-3Mk7IA",
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                  {
                    el: ".paneflow-item-aI1Pur",
                    translateX: "4.5cqw",
                    translateY: "17.6cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1.03,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 10,
                  },
                  {
                    el: ".paneflow-item-52eDUv",
                    translateX: "6.1cqw",
                    translateY: "26cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1.2,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                ],
                enterFrom: "bottom-right",
                exitTo: "bottom-left",
              },
            ],
          },
          {
            cols: 4,
            rows: 3,
            blocks: [
              {
                el: ".paneflow-block-cecCQP",
                col: 0,
                row: 0,
                widthCols: 1,
                heightRows: 1,
                children: [
                  {
                    el: ".paneflow-item-3Mk7IA",
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                  },
                  {
                    el: ".paneflow-item-aI1Pur",
                    translateX: "29cqw",
                    translateY: "-35cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                  {
                    el: ".paneflow-item-52eDUv",
                    translateX: "-26cqw",
                    translateY: "8.8cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                ],
                enterFrom: "top-left",
                exitTo: "top-left",
              },
              {
                el: ".paneflow-block-zhpyj4",
                col: 1,
                row: 0,
                widthCols: 1,
                heightRows: 1,
                children: [
                  {
                    el: ".paneflow-item-2UkykL",
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                  },
                  {
                    el: ".paneflow-item-kduald",
                    translateX: "19.7cqw",
                    translateY: "-117.5cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                  {
                    el: ".paneflow-item-Ykdums",
                    translateX: "6.6cqw",
                    translateY: "-203.1cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                ],
                enterFrom: "top",
                exitTo: "top",
              },
              {
                el: ".paneflow-block-Fcxpiu",
                col: 2,
                row: 0,
                widthCols: 2,
                heightRows: 1,
                children: [
                  {
                    el: ".paneflow-item-HSKOhH",
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                  },
                  {
                    el: ".paneflow-item-QWpJMe",
                    translateX: "41.1cqw",
                    translateY: "-87.4cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                  {
                    el: ".paneflow-item-jciWTI",
                    translateX: "5.6cqw",
                    translateY: "-139.7cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                ],
                enterFrom: "top-right",
                exitTo: "top-right",
              },
              {
                el: ".paneflow-block-xvmHDf",
                col: 0,
                row: 1,
                widthCols: 1,
                heightRows: 2,
                children: [
                  {
                    el: ".paneflow-item-A36PhO",
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                  },
                  {
                    el: ".paneflow-item-m0prHo",
                    translateX: "50.8cqw",
                    translateY: "-27.7cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                  {
                    el: ".paneflow-item-Uu7iK8",
                    translateX: "158.6cqw",
                    translateY: "-94.7cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                  {
                    el: ".paneflow-item-eRhVjj",
                    translateX: "208.8cqw",
                    translateY: "-0.7cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 0.51,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                ],
                enterFrom: "bottom-left",
                exitTo: "bottom-left",
              },
              {
                el: ".paneflow-block-Ak5Jts",
                col: 1,
                row: 1,
                widthCols: 1,
                heightRows: 2,
                children: [
                  {
                    el: ".paneflow-item-nyG95x",
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                  },
                ],
                enterFrom: "bottom",
                exitTo: "bottom",
              },
              {
                el: ".paneflow-block-v12cRX",
                col: 2,
                row: 1,
                widthCols: 2,
                heightRows: 2,
                children: [
                  {
                    el: ".paneflow-item-eVgPrm",
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                  },
                ],
                enterFrom: "bottom-right",
                exitTo: "bottom-right",
              },
            ],
            autoplayInternal: 0,
          },
          {
            cols: 1,
            rows: 1,
            blocks: [
              {
                el: ".paneflow-block-zhpyj4",
                col: 0,
                row: 0,
                widthCols: 1,
                heightRows: 1,
                children: [
                  {
                    el: ".paneflow-item-2UkykL",
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                  {
                    el: ".paneflow-item-kduald",
                    translateX: "21.9cqw",
                    translateY: "32.6cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 0.95,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                  {
                    el: ".paneflow-item-Ykdums",
                    translateX: "16.7cqw",
                    translateY: "42.2cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 0.76,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 10,
                  },
                ],
                enterFrom: "right",
                exitTo: "left",
              },
            ],
          },
          {
            cols: 3,
            rows: 3,
            blocks: [
              {
                el: ".paneflow-block-cecCQP",
                col: 0,
                row: 0,
                widthCols: 1,
                heightRows: 1,
                children: [
                  {
                    el: ".paneflow-item-3Mk7IA",
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                  },
                  {
                    el: ".paneflow-item-aI1Pur",
                    translateX: "568.1cqw",
                    translateY: "-66cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                  {
                    el: ".paneflow-item-52eDUv",
                    translateX: "-26cqw",
                    translateY: "7.1cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                ],
                enterFrom: "top-left",
                exitTo: "top-left",
              },
              {
                el: ".paneflow-block-zhpyj4",
                col: 1,
                row: 0,
                widthCols: 1,
                heightRows: 2,
                children: [
                  {
                    el: ".paneflow-item-2UkykL",
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                  },
                  {
                    el: ".paneflow-item-kduald",
                    translateX: "53.9cqw",
                    translateY: "-83.3cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                  {
                    el: ".paneflow-item-Ykdums",
                    translateX: "22.3cqw",
                    translateY: "-155.5cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                ],
                enterFrom: "top",
                exitTo: "top",
              },
              {
                el: ".paneflow-block-Fcxpiu",
                col: 2,
                row: 0,
                widthCols: 1,
                heightRows: 1,
                children: [
                  {
                    el: ".paneflow-item-HSKOhH",
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                  },
                  {
                    el: ".paneflow-item-QWpJMe",
                    translateX: "-1.1cqw",
                    translateY: "-186.1cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                  {
                    el: ".paneflow-item-jciWTI",
                    translateX: "-12.1cqw",
                    translateY: "-104.6cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                ],
                enterFrom: "top-right",
                exitTo: "top-right",
              },
              {
                el: ".paneflow-block-xvmHDf",
                col: 0,
                row: 1,
                widthCols: 1,
                heightRows: 2,
                children: [
                  {
                    el: ".paneflow-item-A36PhO",
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                  },
                  {
                    el: ".paneflow-item-m0prHo",
                    translateX: "50.2cqw",
                    translateY: "-101.7cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                  {
                    el: ".paneflow-item-Uu7iK8",
                    translateX: "38.6cqw",
                    translateY: "-120.2cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                  {
                    el: ".paneflow-item-eRhVjj",
                    translateX: "68.3cqw",
                    translateY: "-118.4cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 0.51,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                ],
                enterFrom: "bottom-left",
                exitTo: "bottom-left",
              },
              {
                el: ".paneflow-block-v12cRX",
                col: 2,
                row: 1,
                widthCols: 1,
                heightRows: 2,
                children: [
                  {
                    el: ".paneflow-item-eVgPrm",
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                  },
                ],
                enterFrom: "bottom-right",
                exitTo: "bottom-right",
              },
              {
                el: ".paneflow-block-Ak5Jts",
                col: 1,
                row: 2,
                widthCols: 1,
                heightRows: 1,
                children: [
                  {
                    el: ".paneflow-item-nyG95x",
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                  },
                ],
                enterFrom: "bottom",
                exitTo: "bottom",
              },
            ],
            autoplayInternal: 0,
          },
          {
            cols: 1,
            rows: 1,
            blocks: [
              {
                el: ".paneflow-block-Fcxpiu",
                col: 0,
                row: 0,
                widthCols: 1,
                heightRows: 1,
                children: [
                  {
                    el: ".paneflow-item-HSKOhH",
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                  },
                  {
                    el: ".paneflow-item-QWpJMe",
                    translateX: "-2.9cqw",
                    translateY: "31.6cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 0.78,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 10,
                  },
                  {
                    el: ".paneflow-item-jciWTI",
                    translateX: "-35.8cqw",
                    translateY: "39cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 0.42,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 10,
                  },
                ],
                enterFrom: "right",
                exitTo: "left",
              },
            ],
          },
          {
            cols: 6,
            rows: 2,
            blocks: [
              {
                el: ".paneflow-block-cecCQP",
                col: 0,
                row: 0,
                widthCols: 1,
                heightRows: 2,
                children: [
                  {
                    el: ".paneflow-item-3Mk7IA",
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                  },
                  {
                    el: ".paneflow-item-aI1Pur",
                    translateX: "50.4cqw",
                    translateY: "-123cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                  {
                    el: ".paneflow-item-52eDUv",
                    translateX: "-23.7cqw",
                    translateY: "16.3cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                ],
                enterFrom: "top",
                exitTo: "top",
              },
              {
                el: ".paneflow-block-xvmHDf",
                col: 1,
                row: 0,
                widthCols: 1,
                heightRows: 2,
                children: [
                  {
                    el: ".paneflow-item-A36PhO",
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                  },
                  {
                    el: ".paneflow-item-m0prHo",
                    translateX: "30.5cqw",
                    translateY: "-81.6cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                  {
                    el: ".paneflow-item-Uu7iK8",
                    translateX: "12cqw",
                    translateY: "-60.8cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                  {
                    el: ".paneflow-item-eRhVjj",
                    translateX: "0.6cqw",
                    translateY: "-58cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 0.51,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                ],
                enterFrom: "bottom",
                exitTo: "bottom",
              },
              {
                el: ".paneflow-block-zhpyj4",
                col: 2,
                row: 0,
                widthCols: 1,
                heightRows: 2,
                children: [
                  {
                    el: ".paneflow-item-2UkykL",
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                  },
                  {
                    el: ".paneflow-item-kduald",
                    translateX: "15.7cqw",
                    translateY: "-168.6cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                  {
                    el: ".paneflow-item-Ykdums",
                    translateX: "37cqw",
                    translateY: "-123.5cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                ],
                enterFrom: "top",
                exitTo: "top",
              },
              {
                el: ".paneflow-block-Ak5Jts",
                col: 3,
                row: 0,
                widthCols: 1,
                heightRows: 2,
                children: [
                  {
                    el: ".paneflow-item-nyG95x",
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                  },
                ],
                enterFrom: "bottom",
                exitTo: "bottom",
              },
              {
                el: ".paneflow-block-Fcxpiu",
                col: 4,
                row: 0,
                widthCols: 1,
                heightRows: 2,
                children: [
                  {
                    el: ".paneflow-item-HSKOhH",
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                  },
                  {
                    el: ".paneflow-item-QWpJMe",
                    translateX: "9cqw",
                    translateY: "-113.9cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                  {
                    el: ".paneflow-item-jciWTI",
                    translateX: "-23.5cqw",
                    translateY: "-211.8cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                ],
                enterFrom: "top",
                exitTo: "top",
              },
              {
                el: ".paneflow-block-v12cRX",
                col: 5,
                row: 0,
                widthCols: 1,
                heightRows: 2,
                children: [
                  {
                    el: ".paneflow-item-eVgPrm",
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                  },
                ],
                enterFrom: "bottom",
                exitTo: "bottom",
              },
            ],
            autoplayInternal: 0,
          },
          {
            cols: 1,
            rows: 1,
            blocks: [
              {
                el: ".paneflow-block-xvmHDf",
                col: 0,
                row: 0,
                widthCols: 1,
                heightRows: 1,
                children: [
                  {
                    el: ".paneflow-item-A36PhO",
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                  },
                  {
                    el: ".paneflow-item-m0prHo",
                    translateX: "0.6cqw",
                    translateY: "31.2cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 0.86,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 10,
                  },
                  {
                    el: ".paneflow-item-Uu7iK8",
                    translateX: "7.2cqw",
                    translateY: "34.8cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 0.41,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 10,
                  },
                  {
                    el: ".paneflow-item-eRhVjj",
                    translateX: "-23.1cqw",
                    translateY: "8.7cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 0.43,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 10,
                  },
                ],
                enterFrom: "right",
                exitTo: "left",
              },
            ],
          },
          {
            cols: 6,
            rows: 3,
            blocks: [
              {
                el: ".paneflow-block-cecCQP",
                col: 0,
                row: 0,
                widthCols: 3,
                heightRows: 1,
                children: [
                  {
                    el: ".paneflow-item-3Mk7IA",
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                  },
                  {
                    el: ".paneflow-item-aI1Pur",
                    translateX: "68.6cqw",
                    translateY: "-119.6cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                  {
                    el: ".paneflow-item-52eDUv",
                    translateX: "-25.7cqw",
                    translateY: "21.9cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                ],
                enterFrom: "left",
                exitTo: "left",
              },
              {
                el: ".paneflow-block-Fcxpiu",
                col: 3,
                row: 0,
                widthCols: 3,
                heightRows: 1,
                children: [
                  {
                    el: ".paneflow-item-HSKOhH",
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                  },
                  {
                    el: ".paneflow-item-QWpJMe",
                    translateX: "61.5cqw",
                    translateY: "-186.4cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                  {
                    el: ".paneflow-item-jciWTI",
                    translateX: "2.6cqw",
                    translateY: "-183.9cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                ],
                enterFrom: "right",
                exitTo: "right",
              },
              {
                el: ".paneflow-block-zhpyj4",
                col: 0,
                row: 1,
                widthCols: 3,
                heightRows: 1,
                children: [
                  {
                    el: ".paneflow-item-2UkykL",
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                  },
                  {
                    el: ".paneflow-item-kduald",
                    translateX: "138.4cqw",
                    translateY: "-160.9cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                  {
                    el: ".paneflow-item-Ykdums",
                    translateX: "78.9cqw",
                    translateY: "-127.2cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                ],
                enterFrom: "left",
                exitTo: "left",
              },
              {
                el: ".paneflow-block-Ak5Jts",
                col: 3,
                row: 1,
                widthCols: 3,
                heightRows: 1,
                children: [
                  {
                    el: ".paneflow-item-nyG95x",
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                  },
                ],
                enterFrom: "right",
                exitTo: "right",
              },
              {
                el: ".paneflow-block-xvmHDf",
                col: 0,
                row: 2,
                widthCols: 3,
                heightRows: 1,
                children: [
                  {
                    el: ".paneflow-item-A36PhO",
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                  },
                  {
                    el: ".paneflow-item-m0prHo",
                    translateX: "15.9cqw",
                    translateY: "-98.7cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                  {
                    el: ".paneflow-item-Uu7iK8",
                    translateX: "2.7cqw",
                    translateY: "-90.3cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                  {
                    el: ".paneflow-item-eRhVjj",
                    translateX: "-31.4cqw",
                    translateY: "18.8cqw",
                    translateZ: 0,
                    rotate: 0,
                    scale: 0.51,
                    transformOrigin: "center",
                    opacity: 1,
                    parallax: 0,
                  },
                ],
                enterFrom: "left",
                exitTo: "left",
              },
              {
                el: ".paneflow-block-v12cRX",
                col: 3,
                row: 2,
                widthCols: 3,
                heightRows: 1,
                children: [
                  {
                    el: ".paneflow-item-eVgPrm",
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotate: 0,
                    scale: 1,
                    transformOrigin: "center",
                    opacity: 1,
                  },
                ],
                enterFrom: "right",
                exitTo: "right",
              },
            ],
            autoplayInternal: 0,
          },
        ],
        intro: true,
        navigation: { enabled: true },
      });
    }
    return () => {
      if (paneFlowInstanceRef.current) {
        paneFlowInstanceRef.current.destroy();
      }
    };
  }, []);
  return (
    <div
      ref={paneFlowElRef}
      className="paneflow paneflow-unchanged-vonni-421 paneflow-with-pagination"
    >
      <div className="paneflow-content">
        <div className="paneflow-block paneflow-block-cecCQP">
          <div className="paneflow-bg-image paneflow-item-3Mk7IA">
            <img src="https://cdn.paneflow.com/unchanged-vonni-421/58a3ae9a1d10039b49cf.png" />
          </div>
          <div className="paneflow-text paneflow-item-aI1Pur">
            <div className="paneflow-text-container">
              <div className="paneflow-text-content">
                Da Amazônia <br />
                para sua mesa
              </div>
            </div>
          </div>
          <div className="paneflow-text paneflow-item-52eDUv">
            <div className="paneflow-text-container">
              <div className="paneflow-text-content">
                Nascemos em Belém do Pará <br />e levamos o melhor da região{" "}
                <br />
                Norte para todo o Brasil.
                <br />
                Origem que se sente no sabor.
              </div>
            </div>
          </div>
        </div>
        <div className="paneflow-block paneflow-block-zhpyj4">
          <div className="paneflow-bg-image paneflow-item-2UkykL">
            <img src="https://cdn.paneflow.com/unchanged-vonni-421/9b75faf95075fa3af435.png" />
          </div>
          <div className="paneflow-text paneflow-item-kduald">
            <div className="paneflow-text-container">
              <div className="paneflow-text-content">
                Qualidade que <br />
                alimenta confiança
              </div>
            </div>
          </div>
          <div className="paneflow-text paneflow-item-Ykdums">
            <div className="paneflow-text-container">
              <div className="paneflow-text-content">
                Selecionamos, cuidamos e <br />
                entregamos com responsabilidade.
              </div>
            </div>
          </div>
        </div>
        <div className="paneflow-block paneflow-block-Fcxpiu">
          <div className="paneflow-bg-image paneflow-item-HSKOhH">
            <img src="https://cdn.paneflow.com/unchanged-vonni-421/db1ee123003f5878d222.png" />
          </div>
          <div className="paneflow-text paneflow-item-QWpJMe">
            <div className="paneflow-text-container">
              <div className="paneflow-text-content">
                Variedade que atende <br />
                todos os públicos
              </div>
            </div>
          </div>
          <div className="paneflow-text paneflow-item-jciWTI">
            <div className="paneflow-text-container">
              <div className="paneflow-text-content">
                Do consumidor final às grandes empresas, pescados, carnes,
                <br />
                frutas e muito mais com a qualidade JC Select.
              </div>
            </div>
          </div>
        </div>
        <div className="paneflow-block paneflow-block-xvmHDf">
          <div className="paneflow-bg-image paneflow-item-A36PhO">
            <img src="https://cdn.paneflow.com/unchanged-vonni-421/05c820ab2821efe1b749.png" />
          </div>
          <div className="paneflow-text paneflow-item-m0prHo">
            <div className="paneflow-text-container">
              <div className="paneflow-text-content">
                Alimentos <br />
                com identida
                <br />
                de brasileira
              </div>
            </div>
          </div>
          <div className="paneflow-text paneflow-item-Uu7iK8">
            <div className="paneflow-text-container">
              <div className="paneflow-text-content">
                Mais que alimentos: entregamos cultura, <br />
                frescor e respeito às raízes.
                <br />
                Uma marca conectada com o território.
              </div>
            </div>
          </div>
          <div className="paneflow-text paneflow-item-eRhVjj">
            <div className="paneflow-text-container">
              <div className="paneflow-text-content"></div>
            </div>
          </div>
        </div>
        <div className="paneflow-block paneflow-block-Ak5Jts">
          <div className="paneflow-bg-image paneflow-item-nyG95x">
            <img src="https://cdn.paneflow.com/unchanged-vonni-421/f30d0b49427fed4d740d.png" />
          </div>
        </div>
        <div className="paneflow-block paneflow-block-v12cRX">
          <div className="paneflow-bg-image paneflow-item-eVgPrm">
            <img src="https://cdn.paneflow.com/unchanged-vonni-421/dc1a852315a88857ea13.png" />
          </div>
        </div>
        <div className="paneflow-block paneflow-block-bYSRTd">
          <div className="paneflow-image paneflow-item-9I1TMs">
            <img src="https://cdn.paneflow.com/unchanged-vonni-421/9bc087bffb250e0aa2cc.png" />
          </div>
        </div>
        <div className="paneflow-block paneflow-block-swKOSH">
          <div className="paneflow-image paneflow-item-doyDx6">
            <img src="https://cdn.paneflow.com/unchanged-vonni-421/105be197120ef7ef03fc.png" />
          </div>
        </div>
        <div className="paneflow-block paneflow-block-lLDAa3">
          <div className="paneflow-image paneflow-item-omiiw6">
            <img src="https://cdn.paneflow.com/unchanged-vonni-421/6b7d860cf78d3d03f7ef.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
