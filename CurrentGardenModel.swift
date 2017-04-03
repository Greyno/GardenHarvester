//
//  CurrentGardenModel.swift
//  GardenHarvester
//
//  Created by Gillian Reynolds-Titko on 3/4/17.
//  Copyright © 2017 Reynolds-Titko-Gillian. All rights reserved.
//

import Foundation

//create a struct to act as our data model for the cells in the tableView of our current garden

//Need to create a reference of the itemdetailviewcontroller here so we
//can do calcuations of total weight based on input

    //ItemDetailViewController.self

struct CurrentGardenModel {
    var vegetableType: String
    var vegetableName: String?
    var totalPoundYield: String
    var totalOzYield: String
    //var vegetableImage: String?
}

func calculateWeight(poundValue: Int, ounceValue: Int) -> Int {

    
    return 1
}
