import {Injectable} from '@angular/core';
import {Tweet} from "./models/tweet";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class DataService {

  constructor() {
  }


  tweets: Tweet[] = [
    {
      tweetsText: 'INNOCENT PEOPLE DO NOT BEG FOR PREEMPTIVE PARDONS',
      tweetsRetweetsText: 'What a day',
      mediaText: 'Listen to Matthew McConaughey on the need for gun reform.',
      likes: '',
      messageNos: '10',
      likeNos: '18',
      retweetNos: '25',
    },
    {
      tweetsText: 'It is not the size of the dog in the fight',
      tweetsRetweetsText: 'Nothing lasts forever.',
      mediaText: 'I have missed more than 9,000 shots in my career',
      likes: '',
      messageNos: '14',
      likeNos: '78',
      retweetNos: '30',
    },
    {
      tweetsText: 'The only place you find success before work is in the dictionary',
      tweetsRetweetsText: 'What a day',
      mediaText: 'You are going to fail your way to success',
      likes: '',
      messageNos: '30',
      likeNos: '8',
      retweetNos: '19',
    },
    {
      tweetsText: 'A life spent making mistakes is not only more honorable',
      tweetsRetweetsText: 'Nobody can make you feel inferior without your consent',
      mediaText: 'Listen to Matthew McConaughey on the need for gun reform.',
      likes: '',
      messageNos: '11',
      likeNos: '15',
      retweetNos: '16',
    },
    {
      tweetsText: 'INNOCENT PEOPLE DON\'T BEG FOR PREEMPTIVE PARDONS',
      tweetsRetweetsText: 'Hope never abandons you, you abandon it',
      mediaText: 'Listen to Matthew McConaughey on the need for gun reform.',
      likes: '23',
      messageNos: '13',
      likeNos: '12',
      retweetNos: '10',
    },
    {
      tweetsText: 'It took me a long time not to judge myself through someone else\'s eyes.',
      tweetsRetweetsText: 'The only place you find success before work is in the dictionary',
      mediaText: 'Listen to Matthew McConaughey on the need for gun reform.',
      likes: '',
      messageNos: '10',
      likeNos: '32',
      retweetNos: '19',
    },
    {
      tweetsText: 'The secret is in not giving up',
      tweetsRetweetsText: 'Just decide',
      mediaText: 'Listen to Matthew McConaughey on the need for gun reform.',
      likes: '',
      messageNos: '14',
      likeNos: '78',
      retweetNos: '6',
    },
    {
      tweetsText: 'Nothing splendid has ever been achieved',
      tweetsRetweetsText: 'What a day',
      mediaText: 'Listen to Matthew McConaughey on the need for gun reform.',
      likes: '',
      messageNos: '2',
      likeNos: '1',
      retweetNos: '8',
    },
    {
      tweetsText: 'Aerodynamically the bumblebee shouldn\'t be able to fly',
      tweetsRetweetsText: 'the bumblebee doesn\'t know that so it goes on flying anyway.',
      mediaText: 'Listen to Matthew McConaughey on the need for gun reform.',
      likes: '',
      messageNos: '24',
      likeNos: '61',
      retweetNos: '32',
    },
    {
      tweetsText: 'You can get everything in life you want',
      tweetsRetweetsText: 'Don\'t settle for average',
      mediaText: 'Don\'t bunt.',
      likes: '',
      messageNos: '10',
      likeNos: '98',
      retweetNos: '5',
    }
  ];
}
