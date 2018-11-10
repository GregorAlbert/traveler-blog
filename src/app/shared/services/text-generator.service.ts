import {Injectable} from '@angular/core';
import loremIpsum from "lorem-ipsum";

@Injectable({
  providedIn: 'root'
})
export class TextGeneratorService {

  private randomSentences(count: number): string {
    return loremIpsum({
      count: count                     // Number of words, sentences, or paragraphs to generate.
      , units: 'sentences'            // Generate words, sentences, or paragraphs.
      , sentenceLowerBound: 4         // Minimum words per sentence.
      , sentenceUpperBound: 10        // Maximum words per sentence.
      , paragraphUpperBound: 1        // Maximum sentences per paragraph.
      , format: 'plain'               // Plain text or html
      , random: Math.random           // A PRNG function. Uses Math.random by default
    });
  }

  private randomNumberFromInterval(min: number, max: number): number {
    return Math.floor((Math.random() * max) + min);
  }

  public getParagraph() {
    return this.randomSentences(this.randomNumberFromInterval(this.randomNumberFromInterval(1, 5), 10));
  }

  public getText(paragraphCount: number): string[] {
    return Array.from(Array(paragraphCount).keys(), () => this.getParagraph());
  }

}
