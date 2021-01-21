import {elemsWidthCalculator} from "./slider-functions";
import {formForGallery} from "./transform";

describe("Test of functions", () => {
   describe("Test of functions for slider ", () => {
      describe("elemsWidthCalculator", () => {
          test("positive", () => {
              expect(elemsWidthCalculator(900, 5)).toBe(20);
              expect(elemsWidthCalculator(855, 4)).toBe(25);
              expect(elemsWidthCalculator(700, 5)).toBe(33);
              expect(elemsWidthCalculator(500, 8)).toBe(50);
              expect(elemsWidthCalculator(300, 10)).toBe(100);
          });
           test("negative", () => {
            expect(elemsWidthCalculator(null, 5)).toBeNull;
            expect(elemsWidthCalculator(140, undefined)).toBeNull;
            expect(elemsWidthCalculator(Infinity, undefined)).toBeNull;
          });
      });   
   });
   describe("Tests for transform", () => {
       describe("formForGallery", () => {
           test("positive", ()=>{
               expect(formForGallery("  here is   johnie")).toBe("here-is-johnie")
               expect(formForGallery("dark souls")).toBe("dark-souls")
           });
           test("negative", ()=>{
               expect(formForGallery(23)).toBeNull;
               expect(formForGallery(undefined)).toBeNull;
           });
       });
   });
});
