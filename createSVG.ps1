<#
# Script to create SVG-Flow-chart Files from /src.
# Files will be created in /svg
# js2flow throws some errors on some files, can't find out why.
#
#>


$sourcePath = $PSScriptRoot + "\src"
$targetPath = $PSScriptRoot + "\svg"

Write-Host " Source Path: "$sourcePath
Write-Host " Target Path: "$targetPath

get-childitem -Path $targetPath -recurse -force -include *.svg | remove-item -force

Get-ChildItem -Path $sourcePath | Copy-Item -Destination $targetPath -Recurse -Container

Get-ChildItem -Path $targetPath -recurse | %{js2flowchart  $_.FullName }

get-childitem -Path $targetPath -recurse -force -include *.ts | remove-item -force
