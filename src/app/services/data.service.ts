import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

export interface Dog {
  id: string;
  profileImage: string;
  name: string;
  litters: Litter[];
  owner: string;
  gender: string;
  birthDate: string;
}
export interface Litter {
  id: string;
  birthDate: string;
  puppies: string[];
  name:string;
}
export interface weight {
  date: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Matt Chorsey',
      subject: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0,
      read: false
    },
    {
      fromName: 'Lauren Ruthford',
      subject: 'Long time no chat',
      date: '6:12 AM',
      id: 1,
      read: false
    },
    {
      fromName: 'Jordan Firth',
      subject: 'Report Results',
      date: '4:55 AM',
      id: 2,
      read: false
    },
    {
      fromName: 'Bill Thomas',
      subject: 'The situation',
      date: 'Yesterday',
      id: 3,
      read: false
    },
    {
      fromName: 'Joanne Pollan',
      subject: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      id: 4,
      read: false
    },
    {
      fromName: 'Andrea Cornerston',
      subject: 'Last minute ask',
      date: 'Yesterday',
      id: 5,
      read: false
    },
    {
      fromName: 'Moe Chamont',
      subject: 'Family Calendar - Version 1',
      date: 'Last Week',
      id: 6,
      read: false
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 7,
      read: false
    }
  ];

  public dogs: Dog[] = [
    {
      id: "123",
      profileImage:"",
      name:"Banshee",
      litters:[],
      owner:"John Agler",
      gender: "Female",
      birthDate: "March 5. 2018"
    },
    {
      id: "456",
      profileImage:"",
      name:"Omen",
      litters:[],
      owner:"Sarah Agler",
      gender: "Male",
      birthDate: "Novembver 15. 2018"
    }
  ];

  constructor() { }

  public getDogs(): Dog[] {
    return this.dogs;
  }

  public getDog(id: string): Dog | undefined {
    return this.dogs.find(d => d.id == id);
  }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
