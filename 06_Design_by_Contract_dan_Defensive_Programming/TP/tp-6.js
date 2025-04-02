class SayatTubeVideo {
    constructor(title) {
      // Design by Contract: Validasi judul
      if (title === null) throw new Error("Judul tidak boleh null");
      if (title.length > 100) throw new Error("Judul maksimal 100 karakter");
      
      this.id = this.#generateRandomId();
      this.title = title;
      this.playCount = 0;
    }
  
    // Method untuk generate ID 5 digit
    #generateRandomId() {
      return Math.floor(10000 + Math.random() * 90000);
    }
  
    increasePlayCount(amount) {
      try {
        // Design by Contract: Validasi input
        if (amount > 10000000) throw new Error("Penambahan play count melebihi batas");
        
        // Cek overflow integer
        if (this.playCount + amount > Number.MAX_SAFE_INTEGER) {
          throw new Error("Overflow pada play count");
        }
        
        this.playCount += amount;
      } catch (error) {
        console.error(`Error: ${error.message}`);
      }
    }
  
    printVideoDetails() {
      console.log(
        `Video Details:
  ID: ${this.id}
  Title: ${this.title}
  Play Count: ${this.playCount}`
      );
    }
  }
  
  // Testing implementasi
  try {
    // Membuat video dengan nama praktikan
    const video = new SayatTubeVideo("Tutorial Design By Contract - Rosyid");
    
    // Test case valid
    video.increasePlayCount(50);
    video.printVideoDetails();
    
    // Test case invalid
    console.log("\nTesting invalid cases:");
    
    // Test judul terlalu panjang
    try {
      const longTitle = "a".repeat(101);
      const invalidVideo = new SayatTubeVideo(longTitle);
    } catch (e) {
      console.log(e.message);
    }
    
    // Test penambahan berlebihan
    video.increasePlayCount(10000001);
    
    // Test overflow (dipercepat dengan loop)
    console.log("\nTesting overflow:");
    let tempCount = video.playCount;
    try {
      while(true) {
        video.increasePlayCount(10000000);
        if(tempCount === video.playCount) break;
        tempCount = video.playCount;
      }
    } catch (e) {
      console.log(e.message);
    }
    
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }