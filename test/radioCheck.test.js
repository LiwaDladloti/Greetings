describe('Greet function', function() {
    it('should greet Liwa in English', function() {
        var englishGreeting = radioCheck('Liwa', 'English');
        assert.equal('Hello, Liwa', englishGreeting);
    })  ;
    
    it('should greet Liwa in isiXhosa', function() {
        var xhosaGreeting = radioCheck('Liwa', 'isiXhosa');
        assert.equal('Molo, Liwa', xhosaGreeting);
    });
    
    it('should greet Liwa in Latin', function() {
        var latinGreeting = radioCheck('Liwa', 'Latin');
        assert.equal('Salve, Liwa', latinGreeting);
    });
});