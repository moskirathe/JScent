class GameState {
    constructor() {
        this.grid_width = 0;
        this.grid_height = 0;
        this.seconds = 0;
        this.creatures = [];
        this.game_grid = [];
    }

    number_of_creatures() {
        return this.creatures.length;
    }

    add_creature(creature) {
        this.creatures.push(creature);
    }


    // set up the grid - specify width, height, and create a matrix to track whats where
    make_grid(width, height) {
        // set the width and height
        this.grid_width = width;
        this.grid_height = height;

        // create the game matrix of layer objects
        for (let i = 0; i < this.grid_width; i++) {
            this.game_grid[i] = []
            for (let j = 0; j < this.grid_height; j++) {
                this.game_grid[i][j] = {
                    terrain: 'transparent',
                    landmark: 'transparent'
                }
            }
        }
    }

    // put terrain everywhere
    draw_terrain_everywhere(terrain) {
        for (let x = 0; x < this.grid_width; x++) {
            for (let y = 0; y < this.grid_height; y++) {
                this.game_grid[x][y]["terrain"] = terrain;
            }
        }
    }

    // put terrain by coordinates
    draw_terrain_by_coordinates(terrain, coordinates) {
        let that = this;
        coordinates.forEach(function (item, index) {
            that.game_grid[item[0]][item[1]]["terrain"] = terrain;
        });
    }

    // draw by coordinates
    draw_terrain_by_rectangle(terrain, top_left_x, top_left_y, bottom_right_x, bottom_right_y) {
        for (let x = top_left_x; x <= bottom_right_x; x++) {
            for (let y = top_left_y; y <= bottom_right_y; y++) {
                this.game_grid[x][y]["terrain"] = terrain;
            }
        }
    }

    // put landmark everywhere
    draw_landmark_everywhere(landmark) {
        for (let x = 0; x < this.grid_width; x++) {
            for (let y = 0; y < this.grid_height; y++) {
                this.game_grid[x][y]["landmark"] = landmark;
            }
        }
    }

    // put landmark in by coordinates
    draw_landmark_by_coordinates(landmark, coordinates) {
        let that = this;
        coordinates.forEach(function (item, index) {
            that.game_grid[item[0]][item[1]]["landmark"] = landmark;
        });
    }

    // draw by coordinates
    draw_landmark_by_rectangle(landmark, top_left_x, top_left_y, bottom_right_x, bottom_right_y) {
        for (let x = top_left_x; x <= bottom_right_x; x++) {
            for (let y = top_left_y; y <= bottom_right_y; y++) {
                this.game_grid[x][y]["landmark"] = landmark;
            }
        }
    }

    setSeconds(seconds) {
        this.seconds = seconds;
        // draw by coordinates
        // draw by coordinates
        // draw by coordinates
        // draw by coordinates
        // draw by coordinates
        // draw by coordinates
        // draw by coordinates
    }
}