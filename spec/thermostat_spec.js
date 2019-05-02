describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('can be increased with up()', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('can be decreased with down()', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('cannot go below 10 degrees', function() {
    for (var i = 20; i > 9; i--) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('should have power saving mode ON by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('should be able to switch power saving mode OFF', function() {
    expect(thermostat.isPowerSavingModeOff()).toBe(false);
  });

  // it('cannot go above 25 degrees if PowerSavingMode is ON', function() {
  //   for (var i = 20; i < 26; i++) {
  //     thermostat.up();
  //   }
  //   expect(thermostat.getCurrentTemperature()).toEqual(25);
  // });

});
