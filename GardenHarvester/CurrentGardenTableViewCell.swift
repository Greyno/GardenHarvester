//
//  CurrentGardenTableViewCell.swift
//  GardenHarvester
//
//  Created by Gillian Reynolds-Titko on 2/25/17.
//  Copyright © 2017 Reynolds-Titko-Gillian. All rights reserved.
//

import UIKit

class CurrentGardenTableViewCell: UITableViewCell {
    
    
    @IBOutlet weak var currentGardenVegetableImage: UIImageView!
    @IBOutlet weak var currentGardenVegetableNameLabel: UILabel!
    
    @IBOutlet weak var currentGardenVegetableTypeLabel: UILabel!
    @IBOutlet weak var currentGardenTotalOzYieldLabel: UILabel!
    @IBOutlet weak var currentGardenTotalPoundYieldLabel: UILabel!
    
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

   
    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }

}
