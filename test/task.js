const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
//const should = chai.should();


//Assertion Style
chai.should();
chai.use(chaiHttp);

describe('Task Api',()=>{

	describe('/GET/getall', () => {
		it('it should GET all Data from User', (done) => {
			chai
			.request(server)
			.get(`/getall`)
			.end((error, res) => {
				res.should.have.status(200)
				res.body.should.be.a('object')
				res.body.should.have.length
				done()
			})
		})
	})
	
	describe('Get/getById',()=>{
		it('User find By Id',(done)=>{
			const id = 1;
			chai
			.request(server)
			.get('/byid/' + id)
			.end((err,res)=>{
				res.should.have.status(200);
				res.body.should.be.a('object')
			   // res.body.should.have.property("id");
				// res.body.should.have.property('name');
				// res.body.should.have.property('favorite_product');
				// res.body.should.have.property('id').eq(1);
				done();		
			})
		})
	})


})