
describe 'My Restful Library'
  describe 'get()'
    it 'should be a function' 
		get.should.be_a Function
	end
   
	it 'should support simple routes' 
		get('/user', function(){ return true }) 
		get('/user').should.be_true
	end

	it 'should throw an error when no routes match' 
		-{ get('/foo/bar') }.should.throw_error "Route for path: `/foo/bar' method: get cannot be found"
	end
	
 end
 describe 'put()'
    it 'should be a function' 
		put.should.be_a Function
	end
 end

 describe 'post()'
    it 'should be a function' 
		post.should.be_a Function
	end
  end

  describe 'del()'
    it 'should be a function' 
		del.should.be_a Function
	end
  end
end