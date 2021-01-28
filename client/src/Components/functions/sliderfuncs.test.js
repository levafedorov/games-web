import {elemsWidthCalculator, elemsCicle} from "./slider-functions";
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
      describe("Test for elemsCicle", () => {
          test("Positive", () => {
             expect(elemsCicle([1, 2, 3, 4], 3, "+")).toEqual([2, 3, 4, 1]);
             expect(elemsCicle([1], 0, "+")).toEqual([1]);
             expect(elemsCicle([1, 2, 3, 4, 'string'], 4, "+")).toEqual([2, 3, 4,'string', 1]);
             expect(elemsCicle([1, 2, 3, 4], 0, "-")).toEqual([4, 1, 2, 3]);
             expect(elemsCicle([1, 2, 3, NaN], 0, "-")).toEqual([NaN, 1, 2, 3]);
             expect(elemsCicle([1], 0, "-")).toEqual([1]);
             expect(elemsCicle([], 0, "-")).toEqual([]);
          });
          test("Negative", () => {
            expect(elemsCicle([1, 2, 3, 4], 3, 5)).toBeUndefined;
            expect(elemsCicle([1, 2, 3, 4], 3, "")).toBeUndefined;
            expect(elemsCicle([1, 2, 3, 4],  NaN, "")).toBeUndefined;
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
