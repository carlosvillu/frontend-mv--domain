import Domain from '../../src'

let domain

describe('GetDetailMovieUseCase', () => {
  beforeEach(() => {
    domain = new Domain()
  })

  it('#execute', async () => {
    const movies = await domain
      .get('get_detail_movies_use_case')
      .execute({id: 320288})
    console.log(movies)
  })
})
