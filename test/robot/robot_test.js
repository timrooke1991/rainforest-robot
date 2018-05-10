/* globals: robot */
require('../helper');

describe('Robot tests', () => {

  describe('GET Test 1', () => {
    it('should 0 0 1 BROKEN', (done) => {
      robot.get('/data?cb_x=1&cb_y=1&rsl_x=0&rsl_y=1&cd_x_0=0&cd_y_0=0&cd_amount_0=10&route=PNNEE')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body).to.be.a('object');
          expect(res.body.status.bagsDropped).to.eq(0);
          expect(res.body.status.robotStatus).to.eq('0 1 BROKEN');
          done();
        });
    });
  });

  describe('GET Test 2', () => {
    it('should 5 0 3 OK', (done) => {
      robot.get('/data?cb_x=0&cb_y=5&rsl_x=0&rsl_y=1&cd_x_0=0&cd_y_0=1&cd_amount_0=3&cd_x_1=1&cd_y_1=3&cd_amount_1=3&route=PPPPENNPPWNNDSS')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body).to.be.a('object');
          expect(res.body.status.bagsDropped).to.eq(5);
          expect(res.body.status.robotStatus).to.eq('0 3 OK');
          done();
        });
    });
  });

  describe('GET Test 3', () => {
    it('should -2 -1 BROKEN', (done) => {
      robot.get('/data?cb_x=-2&cb_y=-2&rsl_x=0&rsl_y=0&cd_x_0=-1&cd_y_0=-1&cd_amount_0=2&route=SWPSWDNDN')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body).to.be.a('object');
          expect(res.body.status.bagsDropped).to.eq(1);
          expect(res.body.status.robotStatus).to.eq('-2 -1 BROKEN');
          done();
        });
    });
  });

  describe('GET Test 4', () => {
    it('should -2 -1 BROKEN', (done) => {
      robot.get('/data?cb_x=0&cb_y=2&rsl_x=0&rsl_y=0&cd_x_0=0&cd_y_0=1&cd_amount_0=10&cd_x_1=-1&cd_y_1=-2&cd_amount_1=5&route=NPPPND')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body).to.be.a('object');
          expect(res.body.status.bagsDropped).to.eq(3);
          expect(res.body.status.robotStatus).to.eq('0 2 OK');
          done();
        });
    });
  });
});
