// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const uniqueNumber = Math.floor(Math.random() * 100)

const pAequorFactor = function (uniqueNumber, strand) {
  return {
    specimenNum: uniqueNumber,
    dna: strand,
    mutate() {
      console.log(this.dna)  
      const index = Math.floor(Math.random() * 15)
      let newBase = returnRandBase()
      while(this.dna[index] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[index] = newBase;
      console.log(this.dna)
      return this.dna;
    }
  }
}

const specimen = new pAequorFactor(uniqueNumber, mockUpStrand())
specimen.mutate()




