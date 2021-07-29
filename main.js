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
    },
    compareDNA(dnaToCompare) {
      let hits = 0;
      for (let i = 0; i < this.dna.length; i++) {
        const toCompare = dnaToCompare.dna[i];
        if (this.dna[i] === toCompare) {
          hits += 1;
        }
      }
      
      const hitsPercentage = Math.floor(hits / this.dna.length * 100)
      return (`specimen #1 and specimen #2 have ${hitsPercentage}% DNA in common`);
    }
  }
}

const specimen = new pAequorFactor(uniqueNumber, mockUpStrand())
const specimenTwo = new pAequorFactor(uniqueNumber, mockUpStrand())
console.log(specimen.dna)
console.log(specimenTwo.dna)
// specimen.mutate()

console.log(specimen.compareDNA(specimenTwo))



