import { Injectable } from '@angular/core';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { collection, addDoc,  deleteDoc, doc  } from '@firebase/firestore';

export interface Pessoa {
  id?: string;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private firestore: Firestore) { }

  getPessoa() {
    const getitems = collection(this.firestore, "pets");
    return collectionData(getitems, { idField: 'id' });
  }

  getPessoaFull(pessoa: Pessoa){
    const noteDocRef = doc(this.firestore, `pets/${pessoa}`);
    return docData(noteDocRef, { idField: 'id' });
  }

  async addPessoa(pessoa: Pessoa) {
    const pessoaRef = collection(this.firestore, 'pets');
    return addDoc(pessoaRef, pessoa);
  }

  async deletePessoa(pessoa: Pessoa)
  {
    const noteDocRef = doc(this.firestore, `pets/${pessoa}`);
    return deleteDoc(noteDocRef);
  }

}
