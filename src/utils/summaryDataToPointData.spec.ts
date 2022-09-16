import { summaryDataToPointData } from './summaryDataToPointData'

describe('summaryDataToPointData()', () => {
	it('should convert summary data to point data', () => {
		const summaryWeek1 = {
			timestamp: 1663324192,
			totalData: {
				totalDistance: 1063.7,
				totalHours: 156.8,
				totalPoints: 12,
			},
			summary: [
				{
					name: 'Nordic Semiconductor - Trondheim Office',
					distance: 169.60000000000005,
					hours: 29.799999999999997,
					clubPoints: 1.4,
					elevation: 4352.8,
				},
				{
					name: 'Nordic Semiconductor - Oslo Office',
					distance: 70.39999999999999,
					hours: 13.199999999999998,
					clubPoints: 0.7,
					elevation: 1160.1999999999998,
				},
			],
		}
		const summaryWeek2 = {
			timestamp: 1662938806,
			totalData: {
				totalDistance: 1063.7,
				totalHours: 156.8,
				totalPoints: 12,
			},
			summary: [
                {
                  name: "Nordic Semiconductor - Trondheim Office",
                  distance: 169.60000000000005,
                  hours: 29.799999999999997,
                  clubPoints: 4,
                  elevation: 4352.8
                },
                {
                  name: "Nordic Semiconductor - Oslo Office",
                  distance: 70.39999999999999,
                  hours: 13.199999999999998,
                  clubPoints: 3.7,
                  elevation: 1160.1999999999998
                }
              ]
		}
		/*const summaryDataWeek38 = 
        [
            {
              name: "Nordic Semiconductor - Trondheim Office",
              distance: 169.60000000000005,
              hours: 29.799999999999997,
              clubPoints: 1.4,
              elevation: 4352.8
            },
            {
              name: "Nordic Semiconductor - Oslo Office",
              distance: 70.39999999999999,
              hours: 13.199999999999998,
              clubPoints: 0.7,
              elevation: 1160.1999999999998
            }
          ]
    const summaryDataWeek39 = 
        [
            {
              name: "Nordic Semiconductor - Trondheim Office",
              distance: 169.60000000000005,
              hours: 29.799999999999997,
              clubPoints: 4,
              elevation: 4352.8
            },
            {
              name: "Nordic Semiconductor - Oslo Office",
              distance: 70.39999999999999,
              hours: 13.199999999999998,
              clubPoints: 3.7,
              elevation: 1160.1999999999998
            }
          ]*/

		expect(
			summaryDataToPointData(summaryWeek1, summaryWeek2),
		).toMatchObject([
			{
				week: 38,
				club: 'Trondheim',
				points: 1.4,
			},
			{
				week: 38,
				club: 'Oslo',
				points: 0.7,
			},
			{
				week: 39,
				club: 'Trondheim',
				points: 5.4,
			},
			{
				week: 39,
				club: 'Oslo',
				points: 4.4,
			},
		])
	})
})
