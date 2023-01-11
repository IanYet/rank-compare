import { playerPool, seasonInfo } from './config'
import { SEASON_MODE } from './constant'

class Player {
	id
	talent = 0
	rankPoints = 500
	recordX = []
	record = []
	winRateX = 0
	winRate = 0
	observed = false

	constructor(id, talent, observed = false) {
		this.id = id
		this.talent = talent

		if (seasonInfo.season === SEASON_MODE.season1) {
			this.rankPoints = this.talent - 1000
			this.rankPoints = this.rankPoints < 0 ? 0 : this.rankPoints
		}

		this.observed = observed
		this.reRank()
	}

	win() {
		this.rankPoints = this.rankPoints + 25
		this.record.push(1)
		this.recordX.push(1)

		if (this.recordX.length > seasonInfo.X) {
			this.recordX.shift()
		}

		this.winRate = (this.winRate * (this.record.length - 1) + 1) / this.record.length
		this.winRateX =
			this.recordX.reduce((prev, cur) => prev + (cur === 1 ? 1 : 0), 0) / this.recordX.length

		this.reRank()
	}

	draw() {
		this.rankPoints = this.rankPoints + 0
		this.record.push(0)
		this.recordX.push(0)

		if (this.recordX.length > seasonInfo.X) {
			this.recordX.shift()
		}

		this.winRate = (this.winRate * (this.record.length - 1) + 0) / this.record.length
		this.winRateX =
			this.recordX.reduce((prev, cur) => prev + (cur === 1 ? 1 : 0), 0) / this.recordX.length

		this.reRank()
	}

	lose() {
		this.rankPoints = this.rankPoints - 25
		this.record.push(-1)
		this.recordX.push(-1)

		if (this.recordX.length > seasonInfo.X) {
			this.recordX.shift()
		}

		this.winRate = (this.winRate * (this.record.length - 1) + 0) / this.record.length
		this.winRateX =
			this.recordX.reduce((prev, cur) => prev + (cur === 1 ? 1 : 0), 0) / this.recordX.length

		this.reRank()
	}

	reRank() {
		if (this.rankPoints <= 1000) {
			playerPool.rookie.push(this)
		} else if (this.rankPoints > 1000 && this.rankPoints <= 1500) {
			playerPool.bronze.push(this)
		} else if (this.rankPoints > 1500 && this.rankPoints <= 2000) {
			playerPool.silver.push(this)
		} else if (this.rankPoints > 2000 && this.rankPoints <= 2500) {
			playerPool.gold.push(this)
		} else if (this.rankPoints > 2500 && this.rankPoints <= 3000) {
			playerPool.platium.push(this)
		} else if (this.rankPoints > 3000 && this.rankPoints <= 3500) {
			playerPool.diamond.push(this)
		} else if (this.rankPoints > 3500 && this.rankPoints <= 4000) {
			playerPool.master.push(this)
		} else if (this.rankPoints > 4000) {
			playerPool.grandmaster.push(this)
		}
	}
}

export { Player }
