import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  public treeData: Object[] = [
    { nodeId: '01', nodeText: 'RK', expanded: true,
    nodeChild: [
        {
            nodeId: '01-01', nodeText: '2018',
            nodeChild: [
                { nodeId: '01-01-01', nodeText: 'BARFI' },
                { nodeId: '01-01-02', nodeText: 'ROCKSTAR' },
                { nodeId: '01-01-03', nodeText: 'SAWARIYAr' },
            ],

            


        
          },
           {

              nodeId: '01-10', nodeText: '2019',
              nodeChild: [
                  { nodeId: '01-01-07', nodeText: 'SANJU' },
                  { nodeId: '01-01-08', nodeText: 'TUM HO' },
                  { nodeId: '01-01-09', nodeText: 'SADDA HAQ' },
              ],


            },

         
            
              ]
    },
  
    { nodeId: '01', nodeText: 'SRK', expanded: true,
    nodeChild: [
        {
            nodeId: '01-01', nodeText: '2018',
            nodeChild: [
                { nodeId: '01-01-01', nodeText: 'DDLJ' },
                { nodeId: '01-01-02', nodeText: 'DILWALE' },
                { nodeId: '01-01-03', nodeText: 'KUCH KUCH HOTA HAI' },
            ]
        },
            
            
              ]
    },
  
  ]
  public treeFields: Object = {
    dataSource: this.treeData,
    id: 'nodeId',
    text: 'nodeText',
    child: 'nodeChild'
};
public allowDragAndDrop : boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
