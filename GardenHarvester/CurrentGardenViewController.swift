//
//  CurrentGardenViewController.swift
//  GardenHarvester
//
//  Created by Gillian Reynolds-Titko on 2/25/17.
//  Copyright © 2017 Reynolds-Titko-Gillian. All rights reserved.
//

import UIKit

class CurrentGardenViewController: UIViewController, UITableViewDataSource, UITableViewDelegate {
    
    @IBOutlet weak var tableView: UITableView!

    var vegetableArray: [CurrentGardenModel] = []
    var vegetableImage=["pepper", "tomato", "lettuce","tomato"]
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Load our view with the data from our model
        let veggie1 = CurrentGardenModel(vegetableType: "Pepper", vegetableName: "Jalapeno", totalPoundYield:"0.0", totalOzYield: "0.0")
        let veggie2 = CurrentGardenModel(vegetableType: "Tomato", vegetableName: "Beefsteak", totalPoundYield:"1.0", totalOzYield: "0.5")
        let veggie3 = CurrentGardenModel(vegetableType: "Lettuce", vegetableName: "Mesculun", totalPoundYield:"0.0", totalOzYield:"0.05")
        let veggie4 = CurrentGardenModel(vegetableType: "Tomato", vegetableName: "Jubilee", totalPoundYield:"3.0", totalOzYield: "0.6")
        
        vegetableArray = [veggie1, veggie2, veggie3, veggie4]
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    
    }
    
    @IBAction func addBarButtonItemTapped(_ sender: UIBarButtonItem) {
    
    }
    
    //The CurrentGardenViewController was set (ctrl-drag) as the delegate and data source for the tableView
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        
        //Get a current veggie from our model (array) that we will use to update our cell with
        let currentVeggie = vegetableArray[indexPath.row]
        //let imageName = vegetableArray[indexPath.row]
        
        let cell: CurrentGardenTableViewCell = tableView.dequeueReusableCell(withIdentifier: "CurrentGardenCell") as! CurrentGardenTableViewCell
        
        cell.currentGardenVegetableTypeLabel.text = currentVeggie.vegetableType
        cell.currentGardenTotalPoundYieldLabel.text = currentVeggie.totalPoundYield
        cell.currentGardenTotalOzYieldLabel.text = currentVeggie.totalOzYield
        cell.currentGardenVegetableNameLabel.text = currentVeggie.vegetableName
        cell.imageView?.image = UIImage(named:self.vegetableImage[indexPath.row])
        

        return cell //return each vegetable (cell) associated with a row of the table
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return vegetableArray.count
    }
    
    func numberOfSections(in tableView: UITableView) -> Int {
        return 1
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */

}
