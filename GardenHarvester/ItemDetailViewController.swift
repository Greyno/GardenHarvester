//
//  ItemDetailViewController.swift
//  GardenHarvester
//
//  Created by Gillian Reynolds-Titko on 3/29/17.
//  Copyright © 2017 Reynolds-Titko-Gillian. All rights reserved.
//

import UIKit

class ItemDetailViewController: UIViewController {
    
    @IBOutlet weak var vegetableTypeText: UITextField!
    @IBOutlet weak var vegetableNameText: UITextField!
    @IBOutlet weak var harvestOunceYieldText: UITextField!
    @IBOutlet weak var harvestPoundYieldTExt: UITextField!
    
    override func viewDidLoad() {
        
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
        
    }
    
    
    @IBAction func createVegetableType(_ sender: UITextField) {
        //Enter the type of the vegetable to be added
    }
    
    @IBAction func updateVegatableName(_ sender: UITextField) {
          //Enter the name of the vegetable to be added
    }
    
    @IBAction func updateOzHarvestYield(_ sender: UITextField) {
        //Enter the oz weight of the vegetable (need to be able to internationalize)
    }
    @IBAction func updateLbHarvestYield(_ sender: UITextField) {
        //Enter the lb weight of the vegetable (need to be able to internationalize)
    }

    
    @IBAction func updateVegetableInformation(_ sender: UIButton) {
        //Update the vegetable information entered into the view
        print("We have pressed the update button")
    }
    
    
}
