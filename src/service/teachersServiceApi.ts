import { IFetchTeachersProps, Teachers } from '@/types/types';

class TeachersServiceApi {
  private BASE_URL =
    'https://learn-lingo-app-563b1-default-rtdb.firebaseio.com/teachers.json';

  fetchTeachers({ startAt }: IFetchTeachersProps): Promise<Teachers | null> {
    return fetch(
      `${this.BASE_URL}?orderBy="id"&limitToFirst=4&startAt=${startAt}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error('Fetch teachers failed');
      }

      return response.json();
    });
  }
}

const teachersServiceApi = new TeachersServiceApi();

export default teachersServiceApi;
